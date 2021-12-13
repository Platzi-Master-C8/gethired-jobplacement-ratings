import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ReviewTheApplicantForm } from '../components/ReviewTheApplicantForm';

describe('Component <ReviewTheApplicantForm/>', () => {
    test('renders ReviewTheApplicantForm', () => {
        const component = render(<ReviewTheApplicantForm />);

        component.getByText('Review the applicant');
    });

    test('the modal opens correctly', () => {
        const component = render(<ReviewTheApplicantForm />);

        fireEvent.click(component.getByText('Review the applicant'));

        component.getByText('Applicant name');
    });
});
