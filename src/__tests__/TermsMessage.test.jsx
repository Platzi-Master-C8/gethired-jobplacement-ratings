import React from 'react';

import { render } from '@testing-library/react';
import { TermsMessage } from 'Components/TermsMessage';

describe('Component <TermsMessage/>', () => {
    test('renders TermsMessage', () => {
        const { asFragment } = render(<TermsMessage />);
        expect(asFragment()).toMatchSnapshot();
    });
});
