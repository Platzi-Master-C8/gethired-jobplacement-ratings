import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import CompanyTabs from '../components/CompanyTabs';

describe('<CompanyTabs />', () => {
    test('Component render', () => {
        const { getByText } = render(<CompanyTabs />);

        expect(getByText(/overview/i)).toBeTruthy();
        expect(getByText(/reviews/i)).toBeTruthy();
        expect(getByText(/jobs/i)).toBeTruthy();
    });

    test('Change tabs', () => {
        const { getByText, getByRole } = render(<CompanyTabs />);

        fireEvent.click(getByText(/overview/i));
        expect(getByRole('tab', { name: /overview/i, selected: true }));
        expect(getByRole('tab', { name: /reviews/i, selected: false }));
        expect(getByRole('tab', { name: /jobs/i, selected: false }));

        fireEvent.click(getByText(/reviews/i));
        expect(getByRole('tab', { name: /overview/i, selected: false }));
        expect(getByRole('tab', { name: /reviews/i, selected: true }));
        expect(getByRole('tab', { name: /jobs/i, selected: false }));

        fireEvent.click(getByText(/jobs/i));
        expect(getByRole('tab', { name: /overview/i, selected: false }));
        expect(getByRole('tab', { name: /reviews/i, selected: false }));
        expect(getByRole('tab', { name: /jobs/i, selected: true }));
    });
});
