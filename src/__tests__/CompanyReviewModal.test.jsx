import React from 'react';

import * as driver from '@testing-library/react';
import CompanyReviewModal from 'Components/CompanyReviewForm/CompanyReviewModal';

const defaultProps = {
    open: true,
    handleClose: () => {},
    handleValidate: () => {},
    modalError: '',
    review: {},
    handleInput: () => {},
    handleCheck: () => {},
};

const render = (props = {}) => driver.render(<CompanyReviewModal {...defaultProps} {...props} />);

describe('Component <CompanyReviewModal/>', () => {
    test('renders CompanyReviewModal', () => {
        const { asFragment } = render({});
        expect(asFragment()).toMatchSnapshot();
    });

    test('it does close the Modal', () => {
        const handleClose = jest.fn();
        const subject = render({ handleClose });

        driver.fireEvent.click(subject.getByText(/Cancel/));

        expect(handleClose).toBeCalled();
    });

    test('it does allow to send info', () => {
        const handleValidate = jest.fn();
        const subject = render({ handleValidate });

        driver.fireEvent.click(subject.getByText(/Submit/));

        expect(handleValidate).toBeCalled();
    });

    test('it shows a modal error', () => {
        const subject = render({ modalError: 'Error Test' });

        const alertBar = subject.getByRole('alert');

        expect(alertBar).toBeInTheDocument();
    });

    test(`it allows check the 'still working' option`, () => {
        const handleCheck = jest.fn();
        const subject = render({ handleCheck });

        driver.fireEvent.click(subject.getByRole('checkbox'));

        expect(handleCheck).toBeCalled();
    });

    test('it allows to write in the fields', () => {
        const handleInput = jest.fn();
        const subject = render({ handleInput });

        const jobTitleInput = subject.getByPlaceholderText('Job Title');

        driver.fireEvent.change(jobTitleInput, { target: { value: 'Developer' } });

        expect(handleInput).toBeCalled();
    });

    test('it could recive info', () => {
        const job_title = 'Web UI Developer';
        const subject = render({ review: { job_title } });

        const jobTitleInput = subject.getByPlaceholderText('Job Title');

        expect(jobTitleInput.value).toBe(job_title);
    });
});
