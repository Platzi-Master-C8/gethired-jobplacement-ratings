import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ReviewApplicationProcessForm } from '../components/ReviewApplicationProcess';

describe('Component <ReviewApplicationProcessForm/>', () => {
    test('renders ReviewApplicationProcessForm', () => {
        const { asFragment } = render(<ReviewApplicationProcessForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('the modal opens correctly', () => {
        const component = render(<ReviewApplicationProcessForm />);

        fireEvent.click(component.getByText('Review your application process'));

        component.getByText('Job title');
    });
});
