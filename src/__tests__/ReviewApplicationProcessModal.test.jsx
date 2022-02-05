import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReviewApplicationProcessModal from '../components/ReviewApplicationProcess/ReviewApplicationProcessModal';
import MediaQueyProvider from '../context/MediaQueryContext';

describe('component <ReviewApplicationProcessModal/>', () => {
    const defaultProps = {
        open: true,
        handleClose: () => {},
        handleValidate: () => {},
        errorMessage: '',
        review: {},
        handleInput: () => {},
    };

    const renderComponent = (props = {}) =>
        render(
            <MediaQueyProvider>
                <ReviewApplicationProcessModal {...defaultProps} {...props} />
            </MediaQueyProvider>,
        );

    test('renders ReviewApplicationProcessModal', () => {
        const { asFragment } = renderComponent({});
        expect(asFragment()).toMatchSnapshot();
    });

    test('input works', () => {
        const handleInput = jest.fn();
        const component = renderComponent({ handleInput });
        const input = component.getByPlaceholderText('Job title');

        fireEvent.change(input, { target: { value: 'Frontend Developer' } });

        expect(handleInput).toBeCalled();
    });

    test('it could recive info', () => {
        const job_title = 'Frontend Developer';
        const component = renderComponent({ review: { job_title } });

        const jobInput = component.getByPlaceholderText('Job title');

        expect(jobInput.value).toBe(job_title);
    });

    test('it close the modal', () => {
        const handleClose = jest.fn();
        const component = renderComponent({ handleClose });

        fireEvent.click(component.getByText('Cancel'));

        expect(handleClose).toBeCalled();
    });

    test('it allows to send info', () => {
        const handleValidate = jest.fn();
        const component = renderComponent({ handleValidate });

        fireEvent.click(component.getByText('Submit'));

        expect(handleValidate).toBeCalled();
    });

    test('show error message', () => {
        const errorMessage = 'Error Test';
        const component = renderComponent({ errorMessage });
        component.getByText(errorMessage);
    });
});
