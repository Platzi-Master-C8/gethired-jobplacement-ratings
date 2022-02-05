import React from 'react';

import { render } from '@testing-library/react';
import { TermsMessage } from 'Components/TermsMessage';
import MediaQueyProvider from '../context/MediaQueryContext';

describe('Component <TermsMessage/>', () => {
    test('renders TermsMessage', () => {
        const { asFragment } = render(
            <MediaQueyProvider>
                <TermsMessage />
            </MediaQueyProvider>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
