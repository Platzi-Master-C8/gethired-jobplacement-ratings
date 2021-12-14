import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReviewTheApplicantModal from '../components/ReviewTheApplicantForm/ReviewTheApplicantModal';

describe('component <ReviewTheApplicantModal/>', () => {
    const defaultProps = {
        open: true,
        handleClose: () => {},
        handleValidate: () => {},
        errorMessage: '',
        review: {},
        handleInput: () => {},
    };

    const renderComponent = (props = {}) => render(<ReviewTheApplicantModal {...defaultProps} {...props} />);

    test('renders ReviewTheApplicantModal', () => {
        const component = renderComponent();
        component.getByText('Review the Applicant');
    });

    test('input works', () => {
        const handleInput = jest.fn();
        const component = renderComponent({ handleInput });
        const input = component.getByPlaceholderText('Applicant name');

        fireEvent.change(input, { target: { value: 'Some Name' } });

        expect(handleInput).toBeCalled();
    });

    test('it could recive info', () => {
        const applicant_name = 'Some Name';
        const component = renderComponent({ review: { applicant_name } });

        const nameInput = component.getByPlaceholderText('Applicant name');

        expect(nameInput.value).toBe(applicant_name);
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
