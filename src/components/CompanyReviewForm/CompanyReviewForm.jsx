import React, { useState } from 'react';
import moment from 'moment';
import {
    Alert,
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    MenuItem,
    Modal,
    RadioGroup,
    Radio,
    Select,
    OutlinedInput,
    Typography,
} from '@mui/material';
import { SendModal } from '../SendModal';
import { DateInput } from '../../controls/DateInput';
import api from '../../services/api';

const boxStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65%',
    height: '75%',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
};

const CompanyReviewForm = () => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [modalError, setModalError] = useState('');
    const [sended, setSended] = useState(false);

    const initialState = {
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
                setReview(initialState);
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
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <form onSubmit={handleValidate}>
                        <Box sx={boxStyles}>
                            {modalError && <Alert severity="error">{modalError}</Alert>}
                            <Typography variant="h1" align="center" sx={{ fontSize: 28 }}>
                                Review the Company
                            </Typography>
                            <Grid container marginTop={5}>
                                <Grid item md={12} marginBottom="20px">
                                    <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                        Job Title
                                    </Typography>
                                    <FormControl sx={{ width: '100%' }} required>
                                        <OutlinedInput
                                            id="job_title"
                                            name="job_title"
                                            placeholder="Job Title"
                                            value={review.job_title}
                                            onChange={handleInput}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={12} marginBottom="20px">
                                    <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                        Your Email
                                    </Typography>
                                    <FormControl sx={{ width: '100%' }} required>
                                        <OutlinedInput
                                            id="applicant_email"
                                            name="applicant_email"
                                            placeholder="Your Email"
                                            value={review.applicant_email}
                                            onChange={handleInput}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={12} marginBottom="20px">
                                    <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                        Content
                                    </Typography>
                                    <FormControl sx={{ width: '100%' }} required>
                                        <OutlinedInput
                                            id="content_type"
                                            name="content_type"
                                            placeholder="Content"
                                            value={review.content_type}
                                            onChange={handleInput}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Typography variant="h1" align="center" sx={{ fontSize: 28 }}>
                                How would you rate the following areas ?
                            </Typography>
                            <Grid marginTop={3} marginBottom={3}>
                                <Grid container sx={{ alignItems: 'center' }}>
                                    <Grid item md={6}>
                                        <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                            Carrer development
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <FormControl component="fieldset">
                                            <RadioGroup
                                                id="career_development_rating"
                                                name="career_development_rating"
                                                row
                                                value={review.career_development_rating}
                                                onChange={handleInput}
                                            >
                                                <FormControlLabel value={0} control={<Radio />} label="Good" />
                                                <FormControlLabel value={1} control={<Radio />} label="Regular" />
                                                <FormControlLabel value={2} control={<Radio />} label="Bad" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ alignItems: 'center' }}>
                                    <Grid item md={6}>
                                        <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                            Diversity and Equal Opportunity
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <FormControl component="fieldset">
                                            <RadioGroup
                                                id="diversity_equal_opportunity_rating"
                                                name="diversity_equal_opportunity_rating"
                                                row
                                                value={review.diversity_equal_opportunity_rating}
                                                onChange={handleInput}
                                            >
                                                <FormControlLabel value={0} control={<Radio />} label="Good" />
                                                <FormControlLabel value={1} control={<Radio />} label="Regular" />
                                                <FormControlLabel value={2} control={<Radio />} label="Bad" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ alignItems: 'center' }}>
                                    <Grid item md={6}>
                                        <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                            Working Environment
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <FormControl component="fieldset">
                                            <RadioGroup
                                                id="working_environment_rating"
                                                name="working_environment_rating"
                                                row
                                                value={review.working_environment_rating}
                                                onChange={handleInput}
                                            >
                                                <FormControlLabel value={0} control={<Radio />} label="Good" />
                                                <FormControlLabel value={1} control={<Radio />} label="Regular" />
                                                <FormControlLabel value={2} control={<Radio />} label="Bad" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{ alignItems: 'center' }}>
                                    <Grid item md={6}>
                                        <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                            Salary
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <FormControl component="fieldset">
                                            <RadioGroup
                                                id="salary_rating"
                                                name="salary_rating"
                                                row
                                                value={review.salary_rating}
                                                onChange={handleInput}
                                            >
                                                <FormControlLabel value={0} control={<Radio />} label="Good" />
                                                <FormControlLabel value={1} control={<Radio />} label="Regular" />
                                                <FormControlLabel value={2} control={<Radio />} label="Bad" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={12} marginBottom={3}>
                                <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                    Job Location
                                </Typography>
                                <FormControl sx={{ width: '100%' }} required>
                                    <OutlinedInput
                                        id="job_location"
                                        name="job_location"
                                        placeholder="Job Location"
                                        value={review.job_location}
                                        onChange={handleInput}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid container marginBottom={2} spacing={2}>
                                <Grid item md={6}>
                                    <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                        Start Date
                                    </Typography>
                                    <FormControl sx={{ width: '100%' }} required>
                                        <DateInput
                                            id="start_date"
                                            name="start_date"
                                            value={review.start_date}
                                            onChange={handleInput}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item md={6}>
                                    <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                        End Date
                                    </Typography>
                                    <FormControl sx={{ width: '100%' }} required>
                                        <DateInput
                                            id="end_date"
                                            name="end_date"
                                            value={review.end_date}
                                            disabled={!!review.is_still_working_here}
                                            onChange={handleInput}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container marginBottom={3}>
                                <FormControlLabel
                                    control={
                                        <Checkbox onChange={handleCheck} checked={!!review.is_still_working_here} />
                                    }
                                    label="Is still working here?"
                                />
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item md={6}>
                                    <Grid item md={12} marginBottom={3}>
                                        <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                            Whats the salary?
                                        </Typography>
                                        <FormControl sx={{ width: '40%' }} required>
                                            <OutlinedInput
                                                id="salary"
                                                name="salary"
                                                placeholder="$"
                                                value={review.salary}
                                                onChange={handleInput}
                                            />
                                        </FormControl>
                                        <FormControl sx={{ width: '30%' }} required>
                                            <OutlinedInput
                                                id="currency_type"
                                                name="currency_type"
                                                placeholder="MXN"
                                                value={review.currency_type}
                                                onChange={handleInput}
                                            />
                                        </FormControl>
                                        <FormControl sx={{ width: '30%' }} required>
                                            <Select
                                                labelId="salary_frequency-label"
                                                id="salary_frequency"
                                                name="salary_frequency"
                                                value={review.salary_frequency}
                                                label="Per"
                                                onChange={handleInput}
                                            >
                                                <MenuItem value={0}>Year</MenuItem>
                                                <MenuItem value={1}>Month</MenuItem>
                                                <MenuItem value={2}>Day</MenuItem>
                                                <MenuItem value={3}>Hour</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                            Would you recommend working here to a friend?
                                        </Typography>
                                        <FormControl component="fieldset" required>
                                            <RadioGroup
                                                id="recommended_a_friend"
                                                name="recommended_a_friend"
                                                row
                                                value={review.recommended_a_friend}
                                                onChange={handleInput}
                                            >
                                                <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                                <FormControlLabel value={0} control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid item md={6}>
                                    <Grid item md={12} marginBottom={3}>
                                        <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                            Does the job allows you to work from home?
                                        </Typography>
                                        <FormControl component="fieldset" required>
                                            <RadioGroup
                                                id="remote_work_allowed"
                                                name="remote_work_allowed"
                                                row
                                                value={review.remote_work_allowed}
                                                onChange={handleInput}
                                            >
                                                <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                                <FormControlLabel value={0} control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                            Is the company legally regulated?
                                        </Typography>
                                        <FormControl component="fieldset" required>
                                            <RadioGroup
                                                id="is_legally_company"
                                                name="is_legally_company"
                                                row
                                                value={review.is_legally_company}
                                                onChange={handleInput}
                                            >
                                                <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                                <FormControlLabel value={0} control={<Radio />} label="No" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container sx={{ alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                                <Grid item md={2} onClick={handleClose}>
                                    <Button variant="outlined">Cancel</Button>
                                </Grid>
                                <Grid item md={2}>
                                    <Button variant="outlined" type="submit">
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                </Modal>
            ) : (
                <SendModal open={open} loading={isLoading} error={error} handleClose={handleCloseSended} />
            )}
        </div>
    );
};

export default CompanyReviewForm;
