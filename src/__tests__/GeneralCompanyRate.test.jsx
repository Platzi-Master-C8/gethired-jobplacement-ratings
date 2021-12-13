import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { GeneralCompanyRate } from '../components/GeneralCompanyRate';

describe('<CompanyTabs />', () => {
    test('Component render', () => {
        const { getByText } = render(<GeneralCompanyRate />);

        expect(getByText(/reviews/i)).toBeTruthy();
        expect(getByText(/write a review/i)).toBeTruthy();
    });

    test('Get components', () => {
        const { getByText, getByAltText } = render(<GeneralCompanyRate />);

        expect(getByAltText('green iguana')).toBeTruthy();
        expect(getByText(/company/i)).toBeTruthy();
        expect(getByText(/write a review/i)).toBeTruthy();
    });

    test('Open review modal', () => {
      const { getByText } = render(<GeneralCompanyRate />);

      fireEvent.click(getByText(/write a review/i));
      expect(getByText(/review the company/i)).toBeTruthy();
  });
});
