import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SideInfo from '../components/SideInfo/SideInfo';

describe('component <SideInfo/>', () => {
    test('renders the button', () => {
        const component = render(<SideInfo />);
        component.getByRole('button');
    });

    test('opens the drawer', () => {
        const component = render(<SideInfo />);

        fireEvent.click(component.getByRole('button'));

        component.getByText('Overall Rating');
    });
});
