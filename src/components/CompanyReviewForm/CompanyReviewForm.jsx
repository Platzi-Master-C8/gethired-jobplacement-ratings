import React, { useState } from 'react';
import {
    FormControl,
    OutlinedInput,
    Grid,
    Typography,
    FormControlLabel,
    Box,
    Button,
    Modal,
    RadioGroup,
    Radio,
} from '@mui/material';
import CompanyReviewFormP2 from './CompanyReviewFormP2';

const boxStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '65%',
    height: '75%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
};

const CompanyReviewForm = () => {
    const [open, setOpen] = useState(false);

    const [review, setReview] = useState({
        companyId: 0,
        userId: 0,
        jobTitle: '',
        contentType: '',
        careerDevelopmentRating: '',
        diversityEqualOpportunityRating: '',
        workingEnvironmentRating: '',
        salaryRating: '',
        jobLocation: '',
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        isStillWorkingHere: 0,
        salary: 0,
        salary_coin: '',
        salary_frequency: '',
        recommendedAFriend: 0,
        allowsRemoteWork: 0,
        isLegallyCompany: 0,
        utilityCounter: 0,
        nonUtilityCounter: 0,
        createdAt: new Date().toISOString(),
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setReview({ ...review, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(review);
        setOpen(false);
    };

    return (
        <div>
            <Grid md={12} sx={{ display: 'grid', justifyContent: 'flex-end' }}>
                <Button onClick={handleOpen}>Write a Review</Button>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleSubmit}>
                    <Box sx={boxStyles}>
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
                                        id="jobTitle"
                                        name="jobTitle"
                                        placeholder="Job Title"
                                        value={review.jobTitle}
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
                                        id="contentType"
                                        name="contentType"
                                        placeholder="Content"
                                        value={review.contentType}
                                        onChange={handleInput}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Typography variant="h1" align="center" sx={{ fontSize: 28 }}>
                            Hoe would you rate the following areas ?
                        </Typography>
                        <Grid marginTop={3}>
                            <Grid container sx={{ alignItems: 'center' }}>
                                <Grid item md={6}>
                                    <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                        Carrer development
                                    </Typography>
                                </Grid>
                                <Grid item md={6}>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup
                                            id="careerDevelopmentRating"
                                            name="careerDevelopmentRating"
                                            row
                                            value={review.careerDevelopmentRating}
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
                                    <FormControl component="fieldset" required>
                                        <RadioGroup
                                            id="diversityEqualOpportunityRating"
                                            name="diversityEqualOpportunityRating"
                                            row
                                            value={review.diversityEqualOpportunityRating}
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
                                    <FormControl component="fieldset" required>
                                        <RadioGroup
                                            id="workingEnvironmentRating"
                                            name="workingEnvironmentRating"
                                            row
                                            value={review.workingEnvironmentRating}
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
                                    <FormControl component="fieldset" required>
                                        <RadioGroup
                                            id="salaryRating"
                                            name="salaryRating"
                                            row
                                            value={review.salaryRating}
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
                        <CompanyReviewFormP2 review={review} handleInput={handleInput} />
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
        </div>
    );
};

export default CompanyReviewForm;
