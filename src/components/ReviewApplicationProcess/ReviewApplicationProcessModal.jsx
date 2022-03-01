import React from 'react';
import PropTypes from 'prop-types';
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
import { styled } from '@mui/material/styles';

import { TermsMessage } from '../TermsMessage';

import { useMediaQueryContext } from '../../context/MediaQueryContext';

const boxStyles = (isMobile) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile.medium ? '70%' : '45%',
    height: isMobile.medium ? '60%' : '75%',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
    textAlign: isMobile.medium ? 'center' : 'unset',
    justifyContent: isMobile.medium ? 'center' : 'unset',
});

const StyledGrid = styled(Grid)`
    @media (max-width: 600px) {
        margin: 20px 0;

        .MuiFormControlLabel-label {
            font-size: 15px;
        }
    }
`;

const LengthMessage = styled(Box)`
    width: 90%;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ReviewApplicationProcessModal = ({
    open,
    handleInput,
    handleClose,
    review,
    handleValidate,
    errorMessage,
    lengthError,
}) => {
    const isMobile = useMediaQueryContext();

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleValidate}>
                    <Box sx={boxStyles(isMobile)}>
                        <Typography
                            variant="h1"
                            align="center"
                            sx={{ fontSize: isMobile.medium ? 20 : 28, lineHeight: isMobile.medium && '30px' }}
                        >
                            Review your Application Process
                        </Typography>
                        <Grid container marginTop={3}>
                            <Grid item md={6} sm={12} xs={12}>
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
                                <StyledGrid item xs={12}>
                                    <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px auto' }}>
                                        How would you rate the salary?
                                    </Typography>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup
                                            id="salary_evaluation_rating"
                                            data-testid="salary_evaluation_rating"
                                            name="salary_evaluation_rating"
                                            row
                                            value={review.salary_evaluation_rating}
                                            onChange={handleInput}
                                        >
                                            <FormControlLabel value="High" control={<Radio />} label="High" />
                                            <FormControlLabel value="Average" control={<Radio />} label="Average" />
                                            <FormControlLabel value="Low" control={<Radio />} label="Low" />
                                        </RadioGroup>
                                    </FormControl>
                                </StyledGrid>
                                <StyledGrid>
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
                                </StyledGrid>
                                <StyledGrid>
                                    <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                        How was the response time?
                                    </Typography>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup
                                            id="interview_response_time_rating"
                                            data-testid="interview_response_time_rating"
                                            name="interview_response_time_rating"
                                            row
                                            value={review.interview_response_time_rating}
                                            onChange={handleInput}
                                        >
                                            <FormControlLabel value="Good" control={<Radio />} label="Good" />
                                            <FormControlLabel value="Regular" control={<Radio />} label="Regular" />
                                            <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
                                        </RadioGroup>
                                    </FormControl>
                                </StyledGrid>
                                <StyledGrid>
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
                                            <FormControlLabel value="Good" control={<Radio />} label="Good" />
                                            <FormControlLabel value="Regular" control={<Radio />} label="Regular" />
                                            <FormControlLabel value="Bad" control={<Radio />} label="Bad" />
                                        </RadioGroup>
                                    </FormControl>
                                </StyledGrid>
                                <StyledGrid>
                                    <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                        Is the company legally well regulated?
                                    </Typography>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup
                                            id="is_legally_company"
                                            data-testid="is_legally_company"
                                            name="is_legally_company"
                                            row
                                            value={review.is_legally_company}
                                            onChange={handleInput}
                                        >
                                            <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                            <FormControlLabel value={0} control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </StyledGrid>
                            </Grid>
                            <Grid item lg={6} md={12} sx={{ paddingLeft: !isMobile.medium && '30px' }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontSize: 16, margin: isMobile.medium ? '0 0 10px  0' : '10px 0' }}
                                >
                                    What part of the process would you like to improve?
                                </Typography>
                                <FormControl sx={{ width: '90%' }}>
                                    <OutlinedInput
                                        multiline
                                        rows={6}
                                        id="improvement_content"
                                        name="improvement_content"
                                        value={review.improvement_content}
                                        onChange={handleInput}
                                    />
                                </FormControl>
                                <LengthMessage>
                                    <Typography variant="caption" sx={{ color: 'rgb(255, 117, 117)' }}>
                                        {lengthError || ''}
                                    </Typography>
                                    <Typography variant="caption">
                                        {review?.improvement_content?.length || 0}
                                    </Typography>
                                </LengthMessage>
                            </Grid>
                            <Grid item md={12}>
                                <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '15px 0' }}>
                                    How long it took from the begining to the end of the process?
                                </Typography>
                                <FormControl sx={{ width: '20%', marginRight: '10px' }}>
                                    <OutlinedInput
                                        type="number"
                                        id="amount_of_recruitment_time"
                                        name="amount_of_recruitment_time"
                                        value={review.amount_of_recruitment_time}
                                        onChange={handleInput}
                                    />
                                </FormControl>
                                <FormControl sx={{ width: isMobile.medium ? '50%' : '20%' }} required>
                                    <Select
                                        labelId="recruitment_process_period"
                                        id="recruitment_process_period"
                                        name="recruitment_process_period"
                                        value={review.recruitment_process_period}
                                        onChange={handleInput}
                                    >
                                        <MenuItem value="Year">Year(s)</MenuItem>
                                        <MenuItem value="Month">Month(s)</MenuItem>
                                        <MenuItem value="Day">Day(s)</MenuItem>
                                        <MenuItem value="Hour">Hour(s)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid sx={{ margin: '15px' }}>
                            <TermsMessage />
                        </Grid>
                        {errorMessage && (
                            <Alert style={{ marginTop: '15px' }} severity="error">
                                {errorMessage}
                            </Alert>
                        )}
                        <Grid container sx={{ alignItems: 'center', justifyContent: 'center', marginTop: 4 }}>
                            <Grid item lg={2} md={3} sm={3} xs={4} onClick={handleClose}>
                                <Button variant="outlined">Cancel</Button>
                            </Grid>
                            <Grid item lg={2} md={3} sm={3} xs={4}>
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
    lengthError: PropTypes.string.isRequired,
};

export default ReviewApplicationProcessModal;
