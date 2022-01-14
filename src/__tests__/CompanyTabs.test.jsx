import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import CompanyTabs from '../components/CompanyTabs';

const tabsOptions = [
    { tabKey: 'Overview', tabContent: 'Overview' },
    { tabKey: 'Reviews', tabContent: 'Reviews' },
    { tabKey: 'Jobs', tabContent: 'Jobs' },
];

const defaultProps = { tabsOptions };
const renderComponent = (props = {}) => render(<CompanyTabs {...defaultProps} {...props} />);

describe('<CompanyTabs />', () => {
    test('Component render', () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
    });

    test('Change tabs', () => {
        const { getByText, getByRole } = renderComponent();

        fireEvent.click(getByText(tabsOptions[0].tabKey));
        expect(getByRole('tab', { name: tabsOptions[0].tabKey, selected: true }));
        expect(getByRole('tab', { name: tabsOptions[1].tabKey, selected: false }));
        expect(getByRole('tab', { name: tabsOptions[2].tabKey, selected: false }));

        fireEvent.click(getByText(tabsOptions[1].tabKey));
        expect(getByRole('tab', { name: tabsOptions[0].tabKey, selected: false }));
        expect(getByRole('tab', { name: tabsOptions[1].tabKey, selected: true }));
        expect(getByRole('tab', { name: tabsOptions[2].tabKey, selected: false }));

        fireEvent.click(getByText(tabsOptions[2].tabKey));
        expect(getByRole('tab', { name: tabsOptions[0].tabKey, selected: false }));
        expect(getByRole('tab', { name: tabsOptions[1].tabKey, selected: false }));
        expect(getByRole('tab', { name: tabsOptions[2].tabKey, selected: true }));
    });
});
