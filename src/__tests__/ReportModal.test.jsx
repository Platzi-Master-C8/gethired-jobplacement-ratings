import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ReportModal } from '../components/ReportModal';

const defaultProps = {
    open: true,
    handleClose: () => {},
};

const renderComponent = (props = {}) => render(<ReportModal {...defaultProps} {...props} />);

describe('<ReportModal />', () => {
    test('Component render', () => {
        const { asFragment } = renderComponent({});
        expect(asFragment()).toMatchSnapshot();
    });

    test('Modal fill form', () => {
        const { getByText, getByRole, getByLabelText } = renderComponent({});

        const reasonInput = getByLabelText(/describe the issue/i);
        const emailInput = getByLabelText(/email/i);

        fireEvent.mouseDown(getByRole('button', { expanded: false }));
        const listbox = within(getByRole('listbox'));

        fireEvent.click(listbox.getByText(/Suspicious, spam or fake/i));
        fireEvent.change(reasonInput, { target: { value: 'Example test' } });
        fireEvent.change(emailInput, { target: { value: 'example@test.com' } });
        fireEvent.click(getByText(/submit/i));
    });

    test('it calls the close function', () => {
        const handleClose = jest.fn();
        const { getByTitle } = renderComponent({ handleClose });

        fireEvent.click(getByTitle('Close modal'));
        expect(handleClose).toBeCalled();
    });
});
