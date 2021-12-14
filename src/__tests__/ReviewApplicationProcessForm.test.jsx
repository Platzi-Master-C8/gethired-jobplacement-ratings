import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ReviewApplicationProcessForm } from '../components/ReviewApplicationProcess';

describe('Component <ReviewApplicationProcessForm/>', () => {
    test('renders ReviewApplicationProcessForm', () => {
        const component = render(<ReviewApplicationProcessForm />);

        component.getByText('Review your application process');
    });

    test('the modal opens correctly', () => {
        const component = render(<ReviewApplicationProcessForm />);

        fireEvent.click(component.getByText('Review your application process'));

        component.getByText('Job title');
    });
});
