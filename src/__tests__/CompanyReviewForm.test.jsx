import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { CompanyReviewForm } from 'Components/CompanyReviewForm';

describe('Component <CompanyReviewForm/>', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        weighted_average_per_evaluation: 5,
                        company_id: 1,
                        job_title: 'Frontend Developer',
                        applicant_email: 'example@mail.com',
                        content_type: 'Testing Review',
                        career_development_rating: 'Good',
                        diversity_equal_opportunity_rating: 'Good',
                        working_environment_rating: 'Good',
                        salary_rating: 'Good',
                        job_location: 'Test Location',
                        start_date: '2020-01-01',
                        end_date: '2021-12-21',
                        is_still_working_here: 0,
                        salary: '2000',
                        currency_type: 'USD',
                        salary_frequency: 0,
                        recommended_a_friend: 0,
                        allows_remote_work: 0,
                        is_legally_company: 0,
                        utility_counter: 0,
                        non_utility_counter: 0,
                        created_at: '2022-01-01T00:00:00-06:00',
                    }),
            }),
        );
    });

    test('renders CompanyReviewForm', () => {
        const { asFragment } = render(<CompanyReviewForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('it opens the modal', () => {
        const subject = render(<CompanyReviewForm />);

        expect(subject.container.querySelectorAll('h1').length).toBe(0);

        fireEvent.click(subject.getByText(/Write a Review/i));

        expect(subject.getByText(/Review the Company/i)).toBeInTheDocument();
    });

    test('it does close the Modal', () => {
        const subject = render(<CompanyReviewForm />);

        fireEvent.click(subject.getByText(/Write a Review/i));
        expect(subject.getByText(/Review the Company/i)).toBeInTheDocument();

        fireEvent.click(subject.getByText(/Cancel/));
        expect(subject.container.querySelectorAll('h1').length).toBe(0);
    });

    test('it does not send when try to send without fill anything', () => {
        const subject = render(<CompanyReviewForm />);

        fireEvent.click(subject.getByText(/Write a Review/i));
        expect(subject.getByText(/Review the Company/i)).toBeInTheDocument();

        fireEvent.click(subject.getByText(/Submit/));
        expect(subject.getByText(/Review the Company/i)).toBeInTheDocument();
    });

    test('it allows to fill the inputs', () => {
        const subject = render(<CompanyReviewForm />);

        fireEvent.click(subject.getByText(/Write a Review/i));
        expect(subject.getByText(/Review the Company/i)).toBeInTheDocument();

        const jobTitleInput = subject.getByPlaceholderText('Job Title');
        fireEvent.change(jobTitleInput, { target: { value: 'Developer' } });
        expect(jobTitleInput.value).toBe('Developer');
        const emailInput = subject.getByPlaceholderText('Your Email');
        fireEvent.change(emailInput, { target: { value: 'example@mail.com' } });
        expect(emailInput.value).toBe('example@mail.com');
        const contentInput = subject.getByPlaceholderText('Content');
        fireEvent.change(contentInput, { target: { value: 'This is a test' } });
        expect(contentInput.value).toBe('This is a test');
        const jobLocationInput = subject.getByPlaceholderText('Job Location');
        fireEvent.change(jobLocationInput, { target: { value: 'Test Location' } });
        expect(jobLocationInput.value).toBe('Test Location');
        const salaryInput = subject.getByPlaceholderText('$');
        fireEvent.change(salaryInput, { target: { value: '1000' } });
        expect(salaryInput.value).toBe('1000');
        const coinInput = subject.getByPlaceholderText('MXN');
        fireEvent.change(coinInput, { target: { value: 'MXN' } });
        expect(coinInput.value).toBe('MXN');
    });

    test('it shows and error mensagge when the raitings are not selected', () => {
        const subject = render(<CompanyReviewForm />);

        fireEvent.click(subject.getByText(/Write a Review/i));
        expect(subject.getByText(/Review the Company/i)).toBeInTheDocument();

        const jobTitleInput = subject.getByPlaceholderText('Job Title');
        fireEvent.change(jobTitleInput, { target: { value: 'Developer' } });
        const emailInput = subject.getByPlaceholderText('Your Email');
        fireEvent.change(emailInput, { target: { value: 'example@mail.com' } });
        const contentInput = subject.getByPlaceholderText('Content');
        fireEvent.change(contentInput, { target: { value: 'This is a test' } });
        const jobLocationInput = subject.getByPlaceholderText('Job Location');
        fireEvent.change(jobLocationInput, { target: { value: 'Test Location' } });
        const salaryInput = subject.getByPlaceholderText('$');
        fireEvent.change(salaryInput, { target: { value: '1000' } });
        const coinInput = subject.getByPlaceholderText('MXN');
        fireEvent.change(coinInput, { target: { value: 'MXN' } });

        fireEvent.click(subject.getByText(/Submit/));
        const alertBar = subject.getByRole('alert');
        expect(alertBar).toBeInTheDocument();

        const carrerDev = subject.getByTestId('career_development_rating');
        fireEvent.click(carrerDev.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        const alertBar1 = subject.getByRole('alert');
        expect(alertBar1).toBeInTheDocument();

        const diversity = subject.getByTestId('diversity_equal_opportunity_rating');
        fireEvent.click(diversity.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        const alertBar2 = subject.getByRole('alert');
        expect(alertBar2).toBeInTheDocument();

        const workingEnv = subject.getByTestId('working_environment_rating');
        fireEvent.click(workingEnv.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        const alertBar3 = subject.getByRole('alert');
        expect(alertBar3).toBeInTheDocument();

        const salaryR = subject.getByTestId('salary_rating');
        fireEvent.click(salaryR.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        expect(subject.getByText(/Write a Review/i)).toBeInTheDocument();
    });

    test('it checks the still working option', () => {
        const subject = render(<CompanyReviewForm />);

        fireEvent.click(subject.getByText(/Write a Review/i));

        fireEvent.click(subject.getByRole('checkbox'));
        expect(subject.getByRole('checkbox').value).toBe('on');
    });
});
