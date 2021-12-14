import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReviewApplicationProcessModal from '../components/ReviewApplicationProcess/ReviewApplicationProcessModal';

describe('component <ReviewApplicationProcessModal/>', () => {
    const defaultProps = {
        open: true,
        handleClose: () => {},
        handleValidate: () => {},
        errorMessage: '',
        review: {},
        handleInput: () => {},
    };

    const renderComponent = (props = {}) => render(<ReviewApplicationProcessModal {...defaultProps} {...props} />);

    test('renders ReviewApplicationProcessModal', () => {
        const component = renderComponent();
        component.getByText('Review your Application Process');
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
