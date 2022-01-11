import React, { useState } from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ReportModal } from '../components/ReportModal';

describe('<ReportModal />', () => {
    test('Component render', () => {
        const { getByText, getByTitle, getByLabelText } = render(<ReportModal open handleClose={() => {}} />);

        expect(getByTitle(/close modal/i)).toBeTruthy();
        expect(getByText(/help us understand what is happening/i)).toBeTruthy();
        expect(getByText(/what was the issue with this review/i)).toBeTruthy();
        expect(getByLabelText(/describe the issue/i)).toBeTruthy();
        expect(getByText(/your email address/i)).toBeTruthy();
        expect(getByLabelText(/email/i)).toBeTruthy();
        expect(getByText(/submit/i)).toBeTruthy();
    });

    test('Modal fill form', () => {
        const { getByText, getByRole, getByLabelText } = render(<ReportModal open handleClose={() => {}} />);

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
