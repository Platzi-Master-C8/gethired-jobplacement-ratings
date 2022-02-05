import React from 'react';

import { render } from '@testing-library/react';
import { PrivacyPolicyModal } from 'Components/PrivacyPolicyModal';
import MediaQueyProvider from '../context/MediaQueryContext';

describe('Component <PrivacyPolicyModal/>', () => {
    test('renders PrivacyPolicyModal', () => {
        const { asFragment } = render(
            <MediaQueyProvider>
                <PrivacyPolicyModal />
            </MediaQueyProvider>,
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
