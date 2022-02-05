import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ReviewTheApplicantForm } from '../components/ReviewTheApplicantForm';
import MediaQueyProvider from '../context/MediaQueryContext';

const renderComponent = () =>
    render(
        <MediaQueyProvider>
            <ReviewTheApplicantForm />
        </MediaQueyProvider>,
    );

describe('Component <ReviewTheApplicantForm/>', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        applicant_name: 'Test Applicant',
                        is_hired: '1',
                        communication_rating: 4,
                        confidence_rating: 4,
                        negotiation_rating: 4,
                        motivation_rating: 4,
                        self_knowledge_rating: 4,
                        hard_skill_rating: 4,
                    }),
            }),
        );
    });

    test('renders ReviewTheApplicantForm', () => {
        const { asFragment } = renderComponent();
        expect(asFragment()).toMatchSnapshot();
    });

    test('the modal opens correctly', () => {
        const subject = renderComponent();

        fireEvent.click(subject.getByText('Review the applicant'));
        expect(subject.getByText('Applicant name')).toBeInTheDocument();
    });

    test('it does close the Modal', () => {
        const subject = renderComponent();

        fireEvent.click(subject.getByText('Review the applicant'));
        expect(subject.getByText('Applicant name')).toBeInTheDocument();

        fireEvent.click(subject.getByText(/Cancel/));
        expect(subject.container.querySelectorAll('button').length).toBe(1);
    });

    test('it does not send when try to send without fill anything', () => {
        const subject = renderComponent();

        fireEvent.click(subject.getByText('Review the applicant'));
        expect(subject.getByText('Applicant name')).toBeInTheDocument();

        fireEvent.click(subject.getByText(/Submit/));
        expect(subject.getByText('Applicant name')).toBeInTheDocument();
    });

    test('it allows to fill the inputs', () => {
        const subject = renderComponent();

        fireEvent.click(subject.getByText('Review the applicant'));
        expect(subject.getByText('Applicant name')).toBeInTheDocument();

        const applicantName = subject.getByPlaceholderText('Applicant name');
        fireEvent.change(applicantName, { target: { value: 'Developer' } });
        expect(applicantName.value).toBe('Developer');
    });

    test('it shows and error mensagge when the raitings are not selected', () => {
        const subject = renderComponent();

        fireEvent.click(subject.getByText('Review the applicant'));
        expect(subject.getByText('Applicant name')).toBeInTheDocument();

        const applicantName = subject.getByPlaceholderText('Applicant name');
        fireEvent.change(applicantName, { target: { value: 'Developer' } });
        expect(applicantName.value).toBe('Developer');

        fireEvent.click(subject.getByText(/Submit/));
        const alertBar = subject.getByRole('alert');
        expect(alertBar).toBeInTheDocument();

        const isHired = subject.getByTestId('is_hired');
        fireEvent.click(isHired.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        const alertBar1 = subject.getByRole('alert');
        expect(alertBar1).toBeInTheDocument();

        const communicationR = subject.getByTestId('communication_rating');
        fireEvent.click(communicationR.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        const alertBar2 = subject.getByRole('alert');
        expect(alertBar2).toBeInTheDocument();

        const confidenceR = subject.getByTestId('confidence_rating');
        fireEvent.click(confidenceR.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        const alertBar3 = subject.getByRole('alert');
        expect(alertBar3).toBeInTheDocument();

        const negotiationR = subject.getByTestId('negotiation_rating');
        fireEvent.click(negotiationR.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        const alertBar4 = subject.getByRole('alert');
        expect(alertBar4).toBeInTheDocument();

        const motivationR = subject.getByTestId('motivation_rating');
        fireEvent.click(motivationR.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        const alertBar5 = subject.getByRole('alert');
        expect(alertBar5).toBeInTheDocument();

        const selfKnowledge = subject.getByTestId('self_knowledge_rating');
        fireEvent.click(selfKnowledge.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        const alertBar6 = subject.getByRole('alert');
        expect(alertBar6).toBeInTheDocument();

        const hardSkills = subject.getByTestId('hard_skill_rating');
        fireEvent.click(hardSkills.querySelectorAll('input')[0]);
        fireEvent.click(subject.getByText(/Submit/));
        expect(subject.container.querySelectorAll('button').length).toBe(1);
    });
});
