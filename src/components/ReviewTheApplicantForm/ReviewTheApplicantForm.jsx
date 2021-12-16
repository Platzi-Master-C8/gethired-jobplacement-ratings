import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { SendModal } from '../SendModal';
import ReviewTheApplicantModal from './ReviewTheApplicantModal';
import api from '../../services/api';

const ReviewTheApplicantForm = () => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [sended, setSended] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const initialState = {
        applicant_name: '',
        is_hired: null,
        communication_rating: 0,
        confidence_rating: 0,
        negotiation_rating: 0,
        motivation_rating: 0,
        self_knowledge_rating: 0,
        hard_skill_rating: 0,
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
        setIsLoading(true);
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
        console.log(review);
    };

    const handleValidate = (e) => {
        e.preventDefault();
        const {
            communication_rating,
            confidence_rating,
            negotiation_rating,
            motivation_rating,
            self_knowledge_rating,
            hard_skill_rating,
        } = review;

        if (
            !communication_rating ||
            !confidence_rating ||
            !negotiation_rating ||
            !motivation_rating ||
            !self_knowledge_rating ||
            !hard_skill_rating
        ) {
            setErrorMessage('Please Complete all the fields');
        } else {
            setErrorMessage('');
            handleSubmit();
        }
    };

    return (
        <div>
            <Grid item md={12} sx={{ display: 'grid', justifyContent: 'flex-end' }}>
                <Button onClick={handleOpen}>Review the applicant </Button>
            </Grid>
            {!sended ? (
                <ReviewTheApplicantModal
                    open={open}
                    handleClose={handleClose}
                    handleInput={handleInput}
                    handleValidate={handleValidate}
                    setReview={setReview}
                    review={review}
                    errorMessage={errorMessage}
                />
            ) : (
                <SendModal open={open} loading={isLoading} error={error} handleClose={handleCloseSended} />
            )}
        </div>
    );
};

export default ReviewTheApplicantForm;
