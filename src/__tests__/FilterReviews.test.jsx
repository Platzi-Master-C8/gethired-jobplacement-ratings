import React from 'react';

import * as driver from '@testing-library/react';
import { FilterReviews } from 'Components/FilterReviews';

const defaultProps = {
    handleSearch: () => {},
    sortCriteria: { sortKey: 'created_at', orientation: 'asc' },
    toggleSortCriteria: () => {},
};

const render = (props = {}) => driver.render(<FilterReviews {...defaultProps} {...props} />);

describe('Component <FilterReviews/>', () => {
    test('renders FilterReviews', () => {
        const { asFragment } = render({});
        expect(asFragment()).toMatchSnapshot();
    });

    test('it allows write the search query', () => {
        const subject = render({});

        const searchInput = subject.container.querySelector('#search-input');
        driver.fireEvent.change(searchInput, { target: { value: '1234' } });

        expect(subject.getByDisplayValue('1234')).toBeInTheDocument();
    });

    test('it allows to search the writed text', () => {
        const handleSearch = jest.fn();
        const subject = render({ handleSearch });

        const searchInput = subject.container.querySelector('#search-input');
        const searchButton = subject.getByText('Search');
        driver.fireEvent.change(searchInput, { target: { value: '1234' } });
        driver.fireEvent.click(searchButton);

        expect(handleSearch).toBeCalled();
    });

    it('it searchs the user press the Enter key', () => {
        const handleSearch = jest.fn();
        const subject = render({ handleSearch });

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
        const subject = render({ toggleSortCriteria, sortCriteria });

        const sortByHelpfulnessButton = subject.getByText('Helpfulness');
        const arrowDownwardIcon = subject.getByTestId('ArrowDownwardIcon');

        expect(sortByHelpfulnessButton.querySelector('svg')).toEqual(arrowDownwardIcon);

        driver.fireEvent.click(sortByHelpfulnessButton);

        expect(toggleSortCriteria).toBeCalled();
    });

    test('once the list is sorted the helpfulness the button changes', () => {
        const sortCriteria = { sortKey: 'utility_counter', orientation: 'desc' };
        const subject = render({ sortCriteria });

        const sortByHelpfulnessButton = subject.getByText('Helpfulness');
        const arrowUpwardIcon = subject.getByTestId('ArrowUpwardIcon');

        expect(sortByHelpfulnessButton.querySelector('svg')).toEqual(arrowUpwardIcon);
    });

    test('it allows to sort the list of reviews by Rating', () => {
        const toggleSortCriteria = jest.fn();
        const sortCriteria = { sortKey: 'weighted_average_per_evaluation', orientation: 'asc' };
        const subject = render({ toggleSortCriteria, sortCriteria });

        const sortByRaitingButton = subject.getByText('Rating');
        const arrowDownwardIcon = subject.getByTestId('ArrowDownwardIcon');

        expect(sortByRaitingButton.querySelector('svg')).toEqual(arrowDownwardIcon);

        driver.fireEvent.click(sortByRaitingButton);

        expect(toggleSortCriteria).toBeCalled();
    });

    test('once the list is sorted the rating the button changes', () => {
        const sortCriteria = { sortKey: 'weighted_average_per_evaluation', orientation: 'desc' };
        const subject = render({ sortCriteria });

        const sortByRaitingButton = subject.getByText('Rating');
        const arrowUpwardIcon = subject.getByTestId('ArrowUpwardIcon');

        expect(sortByRaitingButton.querySelector('svg')).toEqual(arrowUpwardIcon);
    });

    test('it allows to sort the list of reviews by Date', () => {
        const toggleSortCriteria = jest.fn();
        const subject = render({ toggleSortCriteria });

        const sortByDateButton = subject.getByText('Date');
        const arrowDownwardIcon = subject.getByTestId('ArrowDownwardIcon');

        expect(sortByDateButton.querySelector('svg')).toEqual(arrowDownwardIcon);

        driver.fireEvent.click(sortByDateButton);

        expect(toggleSortCriteria).toBeCalled();
    });

    test('once the list is sorted the date the button changes', () => {
        const sortCriteria = { sortKey: 'created_at', orientation: 'desc' };
        const subject = render({ sortCriteria });

        const sortByDateButton = subject.getByText('Date');
        const arrowUpwardIcon = subject.getByTestId('ArrowUpwardIcon');

        expect(sortByDateButton.querySelector('svg')).toEqual(arrowUpwardIcon);
    });
});
