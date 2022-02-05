import React from 'react';
import { render } from '@testing-library/react';
import { Jobs } from '../components/Jobs';
import MediaQueyProvider from '../context/MediaQueryContext';

const renderComponent = () =>
    render(
        <MediaQueyProvider>
            <Jobs />
        </MediaQueyProvider>,
    );

describe('component <Jobs/>', () => {
    test('renders the Jobs Component', () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the buttons', () => {
        const component = renderComponent();
        const buttons = component.container.querySelectorAll('button');

        expect(buttons.length).toBe(2);
    });
});
