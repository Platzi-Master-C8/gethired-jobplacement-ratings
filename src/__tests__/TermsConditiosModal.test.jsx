import React from 'react';

import { render } from '@testing-library/react';
import { TermsConditiosModal } from 'Components/TermsConditiosModal';
import MediaQueyProvider from '../context/MediaQueryContext';

describe('Component <TermsConditiosModal/>', () => {
    test('renders TermsConditiosModal', () => {
        const { asFragment } = render(
            <MediaQueyProvider>
                <TermsConditiosModal />
            </MediaQueyProvider>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
