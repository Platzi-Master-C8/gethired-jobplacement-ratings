import React, { useState } from 'react';
import moment from 'moment';
import { Button, Grid } from '@mui/material';
import { SendModal } from '../SendModal';
import CompanyReviewModal from './CompanyReviewModal';
import api from '../../services/api';

const CompanyReviewForm = () => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [modalError, setModalError] = useState('');
    const [sended, setSended] = useState(false);

    const initialReviewState = {
        company_id: 0,
        job_title: '',
        applicant_email: '',
        content_type: '',
        career_development_rating: '',
        diversity_equal_opportunity_rating: '',
        working_environment_rating: '',
        salary_rating: '',
        job_location: '',
        start_date: moment().subtract(1, 'M').format(),
        end_date: moment().format(),
        is_still_working_here: 0,
        salary: '',
        currency_type: '',
        salary_frequency: 0,
        recommended_a_friend: 0,
        remote_work_allowed: 0,
        is_legally_company: 0,
        utility_counter: 0,
        non_utility_counter: 0,
        created_at: moment().format(),
    };

    const [review, setReview] = useState(initialReviewState);

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

    const handleCheck = (val) => {
        const e = { target: { value: val.target.checked ? 1 : 0, name: 'is_still_working_here' } };
        handleInput(e);
    };

    const handleSubmit = () => {
        setSended(true);
        setIsLoading(true);
        api.companyEvaluations
            .sendReview(0, review)
            .then((res) => {
                console.log('res: ', res);
                if (res && res.ok) {
                    setIsLoading(false);
                    setError(false);
                } else {
                    setIsLoading(false);
                    setError(true);
                }
                setReview(initialReviewState);
            })
            .catch((err) => {
                console.log('error: ', err);
                setIsLoading(false);
                setError(true);
            });
        console.log(review);
    };

    const handleValidate = (e) => {
        e.preventDefault();
        const {
            career_development_rating,
            diversity_equal_opportunity_rating,
            working_environment_rating,
            salary_rating,
            start_date,
            end_date,
        } = review;

        if (
            !career_development_rating ||
            !diversity_equal_opportunity_rating ||
            !working_environment_rating ||
            !salary_rating
        ) {
            setModalError('Please complete all the fields');
        } else if (moment(start_date).isSameOrAfter(moment(end_date))) {
            setModalError('Start Date must be before the End Date');
        } else {
            setModalError('');
            handleSubmit();
        }
    };

    return (
        <div>
            <Grid item md={12} sx={{ display: 'grid', justifyContent: 'flex-end' }}>
                <Button onClick={handleOpen}>Write a Review</Button>
            </Grid>
            {!sended ? (
                <CompanyReviewModal
                    open={open}
                    handleClose={handleClose}
                    handleValidate={handleValidate}
                    modalError={modalError}
                    review={review}
                    handleInput={handleInput}
                    handleCheck={handleCheck}
                />
            ) : (
                <SendModal open={open} loading={isLoading} error={error} handleClose={handleCloseSended} />
            )}
        </div>
    );
};

export default CompanyReviewForm;
