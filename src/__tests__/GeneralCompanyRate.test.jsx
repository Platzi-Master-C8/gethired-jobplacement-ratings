import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { GeneralCompanyRate } from '../components/GeneralCompanyRate';
import MediaQueyProvider from '../context/MediaQueryContext';

const renderComponent = () =>
    render(
        <MediaQueyProvider>
            <GeneralCompanyRate />
        </MediaQueyProvider>,
    );

describe('<GeneralCompanyRate />', () => {
    test('Component render', () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
    });

    test('Get components', () => {
        const { getByText, getByAltText } = renderComponent();

        expect(getByAltText('green iguana')).toBeTruthy();
        expect(getByText(/company/i)).toBeTruthy();
        expect(getByText(/write a review/i)).toBeTruthy();
    });

    test('Open review modal', () => {
        const { getByText } = renderComponent();

        fireEvent.click(getByText(/write a review/i));
        expect(getByText(/review the company/i)).toBeTruthy();
    });
});
