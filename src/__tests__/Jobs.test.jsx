import React from 'react';
import { render } from '@testing-library/react';
import { Jobs } from '../components/Jobs';

describe('component <Jobs/>', () => {
    test('renders the Jobs Component', () => {
        const { asFragment } = render(<Jobs />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('renders the buttons', () => {
        const component = render(<Jobs />);
        const buttons = component.container.querySelectorAll('button');

        expect(buttons.length).toBe(2);
    });
});
