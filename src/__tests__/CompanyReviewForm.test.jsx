import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { CompanyReviewForm } from 'Components/CompanyReviewForm';

describe('Component <CompanyReviewForm/>', () => {
    test('renders CompanyReviewForm', () => {
        const { asFragment } = render(<CompanyReviewForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('it opens the modal', () => {
        const subject = render(<CompanyReviewForm />);

        expect(subject.container.querySelectorAll('h1').length).toBe(0);

        fireEvent.click(subject.getByText(/Write a Review/i));

        expect(subject.getByText(/Review the Company/i)).toBeInTheDocument();
    });
});
