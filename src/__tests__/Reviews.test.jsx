import React from 'react';

import { render, waitFor } from '@testing-library/react';
import { Reviews } from 'Components/Reviews';
import api from '../services/api';

describe('Component <Reviews/>', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(api.companyEvaluations.mockDataList()),
            }),
        );
    });

    test('renders Reviews', () => {
        const { asFragment } = render(<Reviews isMobile={false} />);
        waitFor(() => {
            expect(asFragment()).toMatchSnapshot();
        });
    });
});
