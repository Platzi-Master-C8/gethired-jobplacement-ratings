import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SideInfo from '../components/SideInfo/SideInfo';

const defaultProps = { isMobile: false };
const renderComponent = (props = {}) => render(<SideInfo {...defaultProps} {...props} />);

describe('component <SideInfo/>', () => {
    test('renders SideInfo', () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the button', () => {
        const component = renderComponent();
        component.getByRole('button');
    });

    test('opens the drawer', () => {
        const component = renderComponent();

        fireEvent.click(component.getByRole('button'));

        component.getByText('Overall Rating');
    });
});
