import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from '@mui/material';
import api from '../../services/api';
import { SendModal } from '../SendModal';
import ReviewApplicationProcessModal from './ReviewApplicationProcessModal';

const ReviewApplicationProcessForm = ({ company_id, applicant_id }) => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [sended, setSended] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [lengthError, setLengthError] = useState('');

    const initialState = {
        applicant_id,
        job_title: '',
        improvement_content: '',
        salary_evaluation_rating: null,
        allows_remote_work: null,
        interview_response_time_rating: null,
        job_description_rating: null,
        is_legally_company: null,
        amount_of_recruitment_time: 1,
        recruitment_process_period: 'Month',
    };

    const [review, setReview] = useState(initialState);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleCloseSended = () => {
        setOpen(false);
        setSended(false);
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setReview({ ...review, [name]: value });
    };

    const handleSubmit = () => {
        setSended(true);
        api.companyReports
            .sendReport(company_id, review)
            .then((res) => {
                if (res && res.ok) {
                    setIsLoading(false);
                    setError(false);
                } else {
                    setIsLoading(false);
                    setError(true);
                }
                setReview(initialState);
            })
            .catch(() => {
                setIsLoading(false);
                setError(true);
            });
    };

    const handleValidate = (e) => {
        e.preventDefault();
        const {
            job_title,
            improvement_content,
            salary_evaluation_rating,
            allows_remote_work,
            interview_response_time_rating,
            job_description_rating,
            is_legally_company,
            amount_of_recruitment_time,
            recruitment_process_period,
        } = review;

        if (improvement_content.length < 100) setLengthError('Field should be greater than 100');
        else if (improvement_content.length > 250) setLengthError('Field should be less than 250');
        else if (
            !job_title ||
            !improvement_content ||
            !salary_evaluation_rating ||
            !allows_remote_work ||
            !interview_response_time_rating ||
            !job_description_rating ||
            !is_legally_company ||
            !amount_of_recruitment_time ||
            !recruitment_process_period
        ) {
            setErrorMessage('Please Complete all the fields');
        } else {
            setErrorMessage('');
            setLengthError('');
            handleSubmit();
        }
    };

    return (
        <div>
            <Grid item md={12}>
                <Button onClick={handleOpen}>Review your application process</Button>
            </Grid>
            {!sended ? (
                <ReviewApplicationProcessModal
                    handleInput={handleInput}
                    open={open}
                    handleClose={handleClose}
                    review={review}
                    handleValidate={handleValidate}
                    errorMessage={errorMessage}
                    lengthError={lengthError}
                />
            ) : (
                <SendModal open={open} loading={isLoading} error={error} handleClose={handleCloseSended} />
            )}
        </div>
    );
};

ReviewApplicationProcessForm.propTypes = {
    company_id: PropTypes.number,
    applicant_id: PropTypes.number,
};

ReviewApplicationProcessForm.defaultProps = {
    company_id: 0,
    applicant_id: 0,
};

export default ReviewApplicationProcessForm;
