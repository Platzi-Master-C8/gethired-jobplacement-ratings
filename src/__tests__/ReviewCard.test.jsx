import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ReviewCard } from '../components/ReviewCard';
import api from '../services/api';

const defaultProps = {
    reasons: [{ name: 'Suspicious, spam or fake', id: 1 }],
    review: api.companyEvaluations.mockDataList()[0],
};

const renderComponent = (props = {}) => render(<ReviewCard {...defaultProps} {...props} />);

describe('<ReviewCard />', () => {
    test('Component render', () => {
        const { asFragment } = renderComponent({});
        expect(asFragment()).toMatchSnapshot();
    });
});
