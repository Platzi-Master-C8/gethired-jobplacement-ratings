import React from 'react';

import { render } from '@testing-library/react';
import { TermsConditiosModal } from 'Components/TermsConditiosModal';

describe('Component <TermsConditiosModal/>', () => {
    test('renders TermsConditiosModal', () => {
        const { asFragment } = render(<TermsConditiosModal />);
        expect(asFragment()).toMatchSnapshot();
    });
});
