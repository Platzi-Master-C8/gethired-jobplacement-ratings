import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ReviewApplicationProcessForm } from '../components/ReviewApplicationProcess';

describe('Component <ReviewApplicationProcessForm/>', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        job_title: 'Frontend Developer',
                        salary_rating: '2',
                        allows_remote_work: '1',
                        response_time_rating: '2',
                        job_description_rating: '2',
                        is_regulated: '1',
                        end_process: 1,
                        time_measurement: 1,
                        improvements: 'This is test',
                    }),
            }),
        );
    });

    test('renders ReviewApplicationProcessForm', () => {
        const { asFragment } = render(<ReviewApplicationProcessForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('the modal opens correctly', () => {
        const subject = render(<ReviewApplicationProcessForm />);

        fireEvent.click(subject.getByText('Review your application process'));
        expect(subject.getByText('Job title')).toBeInTheDocument();
    });

    test('it does close the Modal', () => {
        const subject = render(<ReviewApplicationProcessForm />);

        fireEvent.click(subject.getByText('Review your application process'));
        expect(subject.getByText('Job title')).toBeInTheDocument();

        fireEvent.click(subject.getByText(/Cancel/));
        expect(subject.container.querySelectorAll('button').length).toBe(1);
    });

    test('it does not send when try to send without fill anything', () => {
        const subject = render(<ReviewApplicationProcessForm />);

        fireEvent.click(subject.getByText('Review your application process'));
        expect(subject.getByText('Job title')).toBeInTheDocument();

        fireEvent.click(subject.getByText(/Submit/));
        expect(subject.getByText('Job title')).toBeInTheDocument();
    });

    test('it allows to fill the inputs', () => {
        const subject = render(<ReviewApplicationProcessForm />);

        fireEvent.click(subject.getByText('Review your application process'));
        expect(subject.getByText('Job title')).toBeInTheDocument();

        const jobTitleInput = subject.getByPlaceholderText('Job title');
        fireEvent.change(jobTitleInput, { target: { value: 'Developer' } });
        expect(jobTitleInput.value).toBe('Developer');
    });

    test('it shows and error mensagge when the raitings are not selected', () => {
        const subject = render(<ReviewApplicationProcessForm />);

        fireEvent.click(subject.getByText('Review your application process'));
        expect(subject.getByText('Job title')).toBeInTheDocument();

        const jobTitleInput = subject.getByPlaceholderText('Job title');
        fireEvent.change(jobTitleInput, { target: { value: 'Developer' } });
        expect(jobTitleInput.value).toBe('Developer');

        fireEvent.click(subject.getByText(/Submit/));
        const alertBar = subject.getByRole('alert');
        expect(alertBar).toBeInTheDocument();

        const salaryR = subject.getByTestId('salary_rating');
        fireEvent.click(salaryR.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        const alertBar1 = subject.getByRole('alert');
        expect(alertBar1).toBeInTheDocument();

        const allowsRemote = subject.getByTestId('allows_remote_work');
        fireEvent.click(allowsRemote.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        const alertBar2 = subject.getByRole('alert');
        expect(alertBar2).toBeInTheDocument();

        const responseTime = subject.getByTestId('response_time_rating');
        fireEvent.click(responseTime.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        const alertBar3 = subject.getByRole('alert');
        expect(alertBar3).toBeInTheDocument();

        const jobDescrrption = subject.getByTestId('job_description_rating');
        fireEvent.click(jobDescrrption.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        const alertBar4 = subject.getByRole('alert');
        expect(alertBar4).toBeInTheDocument();

        const isRegulated = subject.getByTestId('is_regulated');
        fireEvent.click(isRegulated.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        subject.debug();
        expect(subject.container.querySelectorAll('button').length).toBe(1);
    });
});
