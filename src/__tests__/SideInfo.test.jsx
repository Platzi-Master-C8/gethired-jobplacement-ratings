import React from 'react';
import { render } from '@testing-library/react';
import SideInfo from '../components/SideInfo/SideInfo';

global.window = {};

const defaultProps = { isMobile: false };
const renderComponent = (props = {}) => render(<SideInfo {...defaultProps} {...props} />);

describe('component <SideInfo/>', () => {
    test('renders SideInfo', () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the button', () => {
        const component = renderComponent();
        component.container.querySelectorAll('button');
    });

    /* test('opens the drawer', () => {
        const component = renderComponent();
        
        fireEvent.click(component.container.querySelectorAll('button'));

        component.getByText('Overall Rating');
    }); */
});
