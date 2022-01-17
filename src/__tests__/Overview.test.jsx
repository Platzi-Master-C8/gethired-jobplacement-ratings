import React from 'react';
import { render } from '@testing-library/react';
import { Overview } from '../components/Overview';

describe('component <Overview/>', () => {
    test('renders the Overview Component', () => {
        const component = render(<Overview />);
        component.getByText('Rating by category');
    });

    test('renders the button', () => {
        const component = render(<Overview />);
        component.getByRole('button');
    });
});
