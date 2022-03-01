import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SendModal } from '../components/SendModal';

const defaultProps = {
    open: true,
    error: false,
    loading: false,
    handleClose: () => {},
};

const renderComponent = (props = {}) => render(<SendModal {...defaultProps} {...props} />);

describe('<SendModal />', () => {
    test('render Component', () => {
        const { asFragment } = renderComponent({});
        expect(asFragment()).toMatchSnapshot();
    });

    test('Modal loading', () => {
        const { getByText, getByTestId, getByRole } = renderComponent({ loading: true });

        expect(getByTestId(/closeicon/i)).toBeTruthy();
        expect(getByText(/send applicant review/i)).toBeTruthy();
        expect(getByRole('progressbar')).toBeTruthy();
    });

    test('Modal error', () => {
        const { getByText, getByTestId } = renderComponent({ error: true });

        expect(getByTestId(/closeicon/i)).toBeTruthy();
        expect(getByText(/¡error!: Try again/i)).toBeTruthy();
        expect(getByText(/there was an error when sending the review/i)).toBeTruthy();
    });

    test('Modal success', () => {
        const { getByText, getByTestId } = renderComponent({});

        expect(getByTestId(/closeicon/i)).toBeTruthy();
        expect(getByText(/Thank you for your time!/i)).toBeTruthy();
        expect(getByText(/Return/i)).toBeTruthy();
    });

    test('it calls the close function', () => {
        const handleClose = jest.fn();
        const { getByTestId } = renderComponent({ handleClose });

        expect(getByTestId(/closeicon/i)).toBeTruthy();
        fireEvent.click(getByTestId(/closeicon/i));
        expect(handleClose).toBeCalled();
    });

    test('Modal close with return button', () => {
        const handleClose = jest.fn();
        const { getByText } = renderComponent({ handleClose });

        expect(getByText(/Return/i)).toBeTruthy();
        fireEvent.click(getByText(/Return/i));
        expect(handleClose).toBeCalled();
    });
});
