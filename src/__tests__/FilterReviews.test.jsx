import React from 'react';

import * as driver from '@testing-library/react';
import { FilterReviews } from 'Components/FilterReviews';

const defaultProps = {
    handleSearch: () => {},
    sortCriteria: { sortKey: 'created_at', orientation: 'asc' },
    toggleSortCriteria: () => {},
};

const renderComponent = (props = {}) => driver.render(<FilterReviews {...defaultProps} {...props} />);

describe('Component <FilterReviews/>', () => {
    test('renders FilterReviews', () => {
        const { asFragment } = renderComponent({});
        expect(asFragment()).toMatchSnapshot();
    });

    test('it allows write the search query', () => {
        const subject = renderComponent({});

        const searchInput = subject.container.querySelector('#search-input');
        driver.fireEvent.change(searchInput, { target: { value: '1234' } });

        expect(subject.getByDisplayValue('1234')).toBeInTheDocument();
    });

    test('it allows to search the writed text', () => {
        const handleSearch = jest.fn();
        const subject = renderComponent({ handleSearch });

        const searchInput = subject.container.querySelector('#search-input');
        const searchButton = subject.getByText('Search');
        driver.fireEvent.change(searchInput, { target: { value: '1234' } });
        driver.fireEvent.click(searchButton);

        expect(handleSearch).toBeCalled();
    });

    it('it searchs the user press the Enter key', () => {
        const handleSearch = jest.fn();
        const subject = renderComponent({ handleSearch });

        const searchInput = subject.container.querySelector('#search-input');

        driver.fireEvent.keyPress(searchInput, {
            key: 'Enter',
            code: 'Enter',
            charCode: 13,
        });

        expect(handleSearch).toBeCalled();
    });

    test('it allows to sort the list of reviews by Helpfulness', () => {
        const toggleSortCriteria = jest.fn();
        const sortCriteria = { sortKey: 'utility_counter', orientation: 'asc' };
        const subject = renderComponent({ toggleSortCriteria, sortCriteria });

        const sortByHelpfulnessButton = subject.container.querySelectorAll('button')[1];
        const arrowDownwardIcon = subject.getByTestId('ArrowDownwardIcon');

        expect(sortByHelpfulnessButton.querySelector('svg')).toEqual(arrowDownwardIcon);

        driver.fireEvent.click(sortByHelpfulnessButton);

        expect(toggleSortCriteria).toBeCalled();
    });

    test('once the list is sorted the helpfulness the button changes', () => {
        const sortCriteria = { sortKey: 'utility_counter', orientation: 'desc' };
        const subject = renderComponent({ sortCriteria });

        const sortByHelpfulnessButton = subject.container.querySelectorAll('button')[1];
        const arrowUpwardIcon = subject.getByTestId('ArrowUpwardIcon');

        expect(sortByHelpfulnessButton.querySelector('svg')).toEqual(arrowUpwardIcon);
    });

    test('it allows to sort the list of reviews by Rating', () => {
        const toggleSortCriteria = jest.fn();
        const sortCriteria = { sortKey: 'rating', orientation: 'asc' };
        const subject = renderComponent({ toggleSortCriteria, sortCriteria });

        const sortByRaitingButton = subject.container.querySelectorAll('button')[2];
        const arrowDownwardIcon = subject.getByTestId('ArrowDownwardIcon');

        expect(sortByRaitingButton.querySelector('svg')).toEqual(arrowDownwardIcon);

        driver.fireEvent.click(sortByRaitingButton);

        expect(toggleSortCriteria).toBeCalled();
    });

    test('once the list is sorted the rating the button changes', () => {
        const sortCriteria = { sortKey: 'rating', orientation: 'desc' };
        const subject = renderComponent({ sortCriteria });

        const sortByRaitingButton = subject.container.querySelectorAll('button')[2];
        const arrowUpwardIcon = subject.getByTestId('ArrowUpwardIcon');

        expect(sortByRaitingButton.querySelector('svg')).toEqual(arrowUpwardIcon);
    });

    test('it allows to sort the list of reviews by Date', () => {
        const toggleSortCriteria = jest.fn();
        const subject = renderComponent({ toggleSortCriteria });

        const sortByDateButton = subject.container.querySelectorAll('button')[3];
        const arrowDownwardIcon = subject.getByTestId('ArrowDownwardIcon');

        expect(sortByDateButton.querySelector('svg')).toEqual(arrowDownwardIcon);

        driver.fireEvent.click(sortByDateButton);

        expect(toggleSortCriteria).toBeCalled();
    });

    test('once the list is sorted the date the button changes', () => {
        const sortCriteria = { sortKey: 'created_at', orientation: 'desc' };
        const subject = renderComponent({ sortCriteria });

        const sortByDateButton = subject.container.querySelectorAll('button')[3];
        const arrowUpwardIcon = subject.getByTestId('ArrowUpwardIcon');

        expect(sortByDateButton.querySelector('svg')).toEqual(arrowUpwardIcon);
    });
});
