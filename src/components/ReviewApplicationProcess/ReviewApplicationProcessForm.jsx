import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import api from '../../services/api';
import { SendModal } from '../SendModal';
import ReviewApplicationProcessModal from './ReviewApplicationProcessModal';

const ReviewApplicationProcessForm = () => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [sended, setSended] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const initialState = {
        job_title: '',
        salary_rating: null,
        allows_remote_work: null,
        response_time_rating: null,
        job_description_rating: null,
        is_regulated: null,
        end_process: 1,
        time_measurement: 1,
        improvements: '',
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
        api.companyEvaluations
            .sendReview(0, review)
            .then((res) => {
                console.log(`res: ${res}`);
                if (res && res.ok) {
                    setIsLoading(false);
                    setError(false);
                } else {
                    setIsLoading(false);
                    setError(true);
                }
                setReview(initialState);
            })
            .catch((err) => {
                console.log(`error: ${err}`);
                setIsLoading(false);
                setError(true);
            });
    };

    const handleValidate = (e) => {
        e.preventDefault();
        const {
            job_title,
            salary_rating,
            allows_remote_work,
            response_time_rating,
            job_description_rating,
            is_regulated,
            end_process,
            time_measurement,
        } = review;

        if (
            !job_title ||
            !salary_rating ||
            !allows_remote_work ||
            !response_time_rating ||
            !job_description_rating ||
            !is_regulated ||
            !end_process ||
            !time_measurement
        ) {
            setErrorMessage('Please Complete all the fields');
        } else {
            setErrorMessage('');
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
                />
            ) : (
                <SendModal open={open} loading={isLoading} error={error} handleClose={handleCloseSended} />
            )}
        </div>
    );
};

export default ReviewApplicationProcessForm;
