import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SideInfo from '../components/SideInfo/SideInfo';
import MediaQueyProvider from '../context/MediaQueryContext';

const defaultProps = { isMobile: false };
const renderComponent = (props = {}) =>
    render(
        <MediaQueyProvider>
            <SideInfo {...defaultProps} {...props} />
        </MediaQueyProvider>,
    );

describe('component <SideInfo/>', () => {
    it('renders SideInfo', () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders the button', () => {
        const component = renderComponent();
        component.container.querySelectorAll('button');
    });

    xit('opens the drawer', () => {
        const component = renderComponent();

        fireEvent.click(component.getByRole('button'));
        component.getByText('Overall Rating');
    });
});
