import React from 'react';

import { render } from '@testing-library/react';
import { PrivacyPolicyModal } from 'Components/PrivacyPolicyModal';

describe('Component <PrivacyPolicyModal/>', () => {
    test('renders PrivacyPolicyModal', () => {
        const { asFragment } = render(<PrivacyPolicyModal />);
        expect(asFragment()).toMatchSnapshot();
    });
});
