import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SendModal } from '../components/SendModal';

describe('<SendModal />', () => {
    test('Component render', () => {
        const error = false;
        const loading = true;
        const { getByText, getByTestId, getByRole } = render(
            <SendModal open error={error} loading={loading} handleClose={() => {}} />,
        );

        expect(getByTestId(/closeicon/i)).toBeTruthy();
        expect(getByText(/send applicant review/i)).toBeTruthy();
        expect(getByRole('progressbar')).toBeTruthy();
    });

    test('Modal loading', () => {
        const error = false;
        const loading = true;
        const { getByText, getByTestId, getByRole } = render(
            <SendModal open error={error} loading={loading} handleClose={() => {}} />,
        );

        expect(getByTestId(/closeicon/i)).toBeTruthy();
        expect(getByText(/send applicant review/i)).toBeTruthy();
        expect(getByRole('progressbar')).toBeTruthy();
    });

    test('Modal error', () => {
        const error = true;
        const loading = false;
        const { getByText, getByTestId } = render(
            <SendModal open error={error} loading={loading} handleClose={() => {}} />,
        );

        expect(getByTestId(/closeicon/i)).toBeTruthy();
        expect(getByText(/¡error!: Try again/i)).toBeTruthy();
        expect(getByText(/there was an error when sending the review/i)).toBeTruthy();
    });

    test('Modal success', () => {
        const error = false;
        const loading = false;
        const { getByText, getByTestId } = render(
            <SendModal open error={error} loading={loading} handleClose={() => {}} />,
        );

        expect(getByTestId(/closeicon/i)).toBeTruthy();
        expect(getByText(/submitted successfully/i)).toBeTruthy();
        expect(getByText(/the applicant will soon be able to see the feedback of their process/i)).toBeTruthy();
    });

    test('Modal close', () => {
        const Component = () => {
            const [open, setOpen] = useState(true);
            const error = false;
            const loading = false;
            return (
                <React.Fragment>
                    <h1>Test</h1>
                    <SendModal open={open} error={error} loading={loading} handleClose={() => setOpen(false)} />
                </React.Fragment>
            );
        };
        const { getByText, getByTestId } = render(<Component />);

        expect(getByTestId(/closeicon/i)).toBeTruthy();
        fireEvent.click(getByTestId(/closeicon/i));
        expect(getByText(/test/i)).toBeTruthy();
    });

    // test('Change tabs', () => {
    //     const { getByText, getByRole } = render(<SendModal />);

    //     fireEvent.click(getByText(/overview/i));
    //     expect(getByRole('tab', { name: /overview/i, selected: true }));
    //     expect(getByRole('tab', { name: /reviews/i, selected: false }));
    //     expect(getByRole('tab', { name: /jobs/i, selected: false }));

    //     fireEvent.click(getByText(/reviews/i));
    //     expect(getByRole('tab', { name: /overview/i, selected: false }));
    //     expect(getByRole('tab', { name: /reviews/i, selected: true }));
    //     expect(getByRole('tab', { name: /jobs/i, selected: false }));

    //     fireEvent.click(getByText(/jobs/i));
    //     expect(getByRole('tab', { name: /overview/i, selected: false }));
    //     expect(getByRole('tab', { name: /reviews/i, selected: false }));
    //     expect(getByRole('tab', { name: /jobs/i, selected: true }));
    // });
});
