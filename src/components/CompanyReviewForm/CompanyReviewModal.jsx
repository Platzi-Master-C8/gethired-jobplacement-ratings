import React from 'react';
import PropTypes from 'prop-types';
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
import { DateInput } from '../../controls/DateInput';

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

const CompanyReviewForm = ({ open, handleClose, handleValidate, modalError, review, handleInput, handleCheck }) => (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <form onSubmit={handleValidate}>
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
                                    data-testid="career_development_rating"
                                    name="career_development_rating"
                                    row
                                    value={review.career_development_rating}
                                    onChange={handleInput}
                                >
                                    <FormControlLabel value="Good" control={<Radio />} label="Good" />
                                    <FormControlLabel value="Regular" control={<Radio />} label="Regular" />
                                    <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
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
                                    data-testid="diversity_equal_opportunity_rating"
                                    name="diversity_equal_opportunity_rating"
                                    row
                                    value={review.diversity_equal_opportunity_rating}
                                    onChange={handleInput}
                                >
                                    <FormControlLabel value="Good" control={<Radio />} label="Good" />
                                    <FormControlLabel value="Regular" control={<Radio />} label="Regular" />
                                    <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
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
                                    data-testid="working_environment_rating"
                                    name="working_environment_rating"
                                    row
                                    value={review.working_environment_rating}
                                    onChange={handleInput}
                                >
                                    <FormControlLabel value="Good" control={<Radio />} label="Good" />
                                    <FormControlLabel value="Regular" control={<Radio />} label="Regular" />
                                    <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
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
                                    data-testid="salary_rating"
                                    name="salary_rating"
                                    row
                                    value={review.salary_rating}
                                    onChange={handleInput}
                                >
                                    <FormControlLabel value="Good" control={<Radio />} label="Good" />
                                    <FormControlLabel value="Regular" control={<Radio />} label="Regular" />
                                    <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
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
                        control={<Checkbox onChange={handleCheck} checked={!!review.is_still_working_here} />}
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
                                    <MenuItem value="Year">Year</MenuItem>
                                    <MenuItem value="Month">Month</MenuItem>
                                    <MenuItem value="Day">Day</MenuItem>
                                    <MenuItem value="Hour">Hour</MenuItem>
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
                {modalError && <Alert severity="error">{modalError}</Alert>}
                <Grid container sx={{ alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                    <Grid item md={2} onClick={handleClose}>
                        <Button variant="outlined">Cancel</Button>
                    </Grid>
                    <Grid item md={2}>
                        <Button variant="contained" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </form>
    </Modal>
);

CompanyReviewForm.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleValidate: PropTypes.func.isRequired,
    modalError: PropTypes.string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    review: PropTypes.object.isRequired,
    handleInput: PropTypes.func.isRequired,
    handleCheck: PropTypes.func.isRequired,
};

export default CompanyReviewForm;
