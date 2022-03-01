import React from 'react';
import moment from 'moment';

import * as driver from '@testing-library/react';
import DateInput from './DateInput';

const defaultProps = {
    value: moment().subtract(1, 'M').format('YYYY-MM-DD'),
    onChange: () => {},
    label: 'Test DateInput',
    name: 'Test DateInput',
    disabled: false,
    withTime: false,
    justTime: false,
};

const renderComponent = (props = {}) => driver.render(<DateInput {...defaultProps} {...props} />);

describe('Component <DateInput/>', () => {
    test('renders DateInput', () => {
        const { asFragment } = renderComponent({});
        expect(asFragment()).toMatchSnapshot();
    });
});
