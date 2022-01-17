import React from 'react';
import {
    Button,
    FormControl,
    Grid,
    Modal,
    OutlinedInput,
    Typography,
    RadioGroup,
    Radio,
    FormControlLabel,
    Select,
    MenuItem,
    Alert,
} from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';

const boxStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '45%',
    height: '75%',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
};

const ReviewApplicationProcessModal = ({ open, handleInput, handleClose, review, handleValidate, errorMessage }) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleValidate}>
                    <Box sx={boxStyles}>
                        <Typography variant="h1" align="center" sx={{ fontSize: 28 }}>
                            Review your Application Process
                        </Typography>
                        <Grid container marginTop={3}>
                            <Grid item md={6}>
                                <Grid item>
                                    <Typography variant="subtitle1" sx={{ fontSize: '16px', margin: '10px 0' }}>
                                        Job title
                                    </Typography>
                                    <FormControl sx={{ width: '100%' }}>
                                        <OutlinedInput
                                            id="job_title"
                                            name="job_title"
                                            placeholder="Job title"
                                            value={review.job_title}
                                            onChange={handleInput}
                                            required
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                        How would you rate the salary?
                                    </Typography>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup
                                            id="salary_rating"
                                            data-testid="salary_rating"
                                            name="salary_rating"
                                            row
                                            value={review.salary_rating}
                                            onChange={handleInput}
                                        >
                                            <FormControlLabel value={2} control={<Radio />} label="High" />
                                            <FormControlLabel value={1} control={<Radio />} label="Average" />
                                            <FormControlLabel value={0} control={<Radio />} label="Low" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                        Does the job allows you to work from home?
                                    </Typography>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup
                                            id="allows_remote_work"
                                            data-testid="allows_remote_work"
                                            name="allows_remote_work"
                                            row
                                            value={review.allows_remote_work}
                                            onChange={handleInput}
                                        >
                                            <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                            <FormControlLabel value={0} control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                        How was the response time?
                                    </Typography>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup
                                            id="response_time_rating"
                                            data-testid="response_time_rating"
                                            name="response_time_rating"
                                            row
                                            value={review.response_time_rating}
                                            onChange={handleInput}
                                        >
                                            <FormControlLabel value={2} control={<Radio />} label="Good" />
                                            <FormControlLabel value={1} control={<Radio />} label="Regular" />
                                            <FormControlLabel value={0} control={<Radio />} label="Bad" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                        How would you rate the job description?
                                    </Typography>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup
                                            id="job_description_rating"
                                            data-testid="job_description_rating"
                                            name="job_description_rating"
                                            row
                                            value={review.job_description_rating}
                                            onChange={handleInput}
                                        >
                                            <FormControlLabel value={2} control={<Radio />} label="High" />
                                            <FormControlLabel value={1} control={<Radio />} label="Average" />
                                            <FormControlLabel value={0} control={<Radio />} label="Low" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                        Is the company legally well regulated?
                                    </Typography>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup
                                            id="is_regulated"
                                            data-testid="is_regulated"
                                            name="is_regulated"
                                            row
                                            value={review.is_regulated}
                                            onChange={handleInput}
                                        >
                                            <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                            <FormControlLabel value={0} control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item md={6} sx={{ paddingLeft: '30px' }}>
                                <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                    What part of the process would you like to improve?
                                </Typography>
                                <FormControl sx={{ width: '90%' }}>
                                    <OutlinedInput
                                        multiline
                                        rows={6}
                                        id="improvements"
                                        name="improvements"
                                        value={review.improvements}
                                        onChange={handleInput}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={12}>
                                <Typography variant="subtitle1" sx={{ fontSize: 16, marginBottom: '15px' }}>
                                    How long it took from the begining to the end of the process?
                                </Typography>
                                <FormControl sx={{ width: '20%', marginRight: '10px' }}>
                                    <OutlinedInput
                                        type="number"
                                        id="end_process"
                                        name="end_process"
                                        value={review.end_process}
                                        onChange={handleInput}
                                    />
                                </FormControl>
                                <FormControl sx={{ width: '20%' }} required>
                                    <Select
                                        labelId="time_measurement"
                                        id="time_measurement"
                                        name="time_measurement"
                                        value={review.time_measurement}
                                        onChange={handleInput}
                                    >
                                        <MenuItem value={0}>Year(s)</MenuItem>
                                        <MenuItem value={1}>Month(s)</MenuItem>
                                        <MenuItem value={2}>Day(s)</MenuItem>
                                        <MenuItem value={3}>Hour(s)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        {errorMessage && (
                            <Alert style={{ marginTop: '15px' }} severity="error">
                                {errorMessage}
                            </Alert>
                        )}
                        <Grid container sx={{ alignItems: 'center', justifyContent: 'center', marginTop: 4 }}>
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
        </div>
    );
};

ReviewApplicationProcessModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired,
    handleValidate: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    review: PropTypes.object.isRequired,
    errorMessage: PropTypes.string.isRequired,
};

export default ReviewApplicationProcessModal;
