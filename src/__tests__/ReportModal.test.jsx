import React, { useState } from 'react';
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

        fireEvent.click(listbox.getByText(/sospechoso, spam o falso/i));
        fireEvent.change(reasonInput, { target: { value: 'Example test' } });
        fireEvent.change(emailInput, { target: { value: 'example@test.com' } });
        fireEvent.click(getByText(/submit/i));
    });

    test('Modal close', () => {
        const Component = () => {
            const [open, setOpen] = useState(true);
            return (
                <React.Fragment>
                    <h1>Test</h1>
                    <ReportModal open={open} handleClose={() => setOpen(false)} />
                </React.Fragment>
            );
        };
        const { getByTitle, getByText } = render(<Component />);

        fireEvent.click(getByTitle(/close modal/i));
        expect(getByText(/test/i)).toBeTruthy();
    });
});
