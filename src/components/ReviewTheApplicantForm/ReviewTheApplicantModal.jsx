import React from 'react';
import PropTypes from 'prop-types';
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
    Rating,
    Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '../../hooks';

import { TermsMessage } from '../TermsMessage';

const StyledRating = styled(Rating)`
    font-size: 2.2rem;

    .css-dqr9h-MuiRating-label {
        padding: 0 10px;
    }
`;

const boxStyles = (isMobile) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '70%' : '50%',
    height: isMobile ? '60%' : '80%',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
    textAlign: 'center',
});

const ReviewTheApplicantModal = ({
    open,
    handleClose,
    handleInput,
    handleValidate,
    review,
    setReview,
    errorMessage,
}) => {
    const isMobile = useMediaQuery('(max-width: 900px)');

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
                        <Typography variant="h1" align="center" sx={{ fontSize: 28 }}>
                            Review the Applicant
                        </Typography>
                        <Grid container marginTop={5}>
                            <Grid item md={6} sm={12} xs={12}>
                                <Typography variant="subtitle1" marginBottom="20px" sx={{ fontSize: 18 }}>
                                    Applicant name
                                </Typography>
                                <FormControl sx={{ width: '85%' }} required>
                                    <OutlinedInput
                                        id="applicant_name"
                                        name="applicant_name"
                                        placeholder="Applicant name"
                                        value={review.applicant_name}
                                        onChange={handleInput}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <Typography
                                    variant="subtitle1"
                                    margin={isMobile ? '20px 0 20px 0' : '0 0 30px 0'}
                                    sx={{ fontSize: 18 }}
                                >
                                    Was he/she hired?
                                </Typography>
                                <FormControl component="fieldset" required>
                                    <RadioGroup
                                        id="is_hired"
                                        data-testid="is_hired"
                                        name="is_hired"
                                        row
                                        value={review.is_hired}
                                        onChange={handleInput}
                                    >
                                        <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                        <FormControlLabel value={0} control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid marginTop={3}>
                            <Typography variant="h2">Skill Assessment</Typography>
                            <Grid container rowSpacing={isMobile ? 2 : 1} alignItems="center" marginTop="5px">
                                <Grid item md={5} sm={12} xs={12}>
                                    <Typography variant="subtitle2">Communication</Typography>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <StyledRating
                                        value={review.communication_rating}
                                        data-testid="communication_rating"
                                        onChange={(event, newValue) => {
                                            setReview({ ...review, communication_rating: newValue });
                                        }}
                                    />
                                </Grid>
                                <Grid item md={5} sm={12} xs={12}>
                                    <Typography variant="subtitle2">Confidence</Typography>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <StyledRating
                                        value={review.confidence_rating}
                                        data-testid="confidence_rating"
                                        onChange={(event, newValue) => {
                                            setReview({ ...review, confidence_rating: newValue });
                                        }}
                                    />
                                </Grid>
                                <Grid item md={5} sm={12} xs={12}>
                                    <Typography variant="subtitle2">Negotiation</Typography>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <StyledRating
                                        value={review.negotiation_rating}
                                        data-testid="negotiation_rating"
                                        onChange={(event, newValue) => {
                                            setReview({ ...review, negotiation_rating: newValue });
                                        }}
                                    />
                                </Grid>
                                <Grid item md={5} sm={12} xs={12}>
                                    <Typography variant="subtitle2">Motivation</Typography>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <StyledRating
                                        value={review.motivation_rating}
                                        data-testid="motivation_rating"
                                        onChange={(event, newValue) => {
                                            setReview({ ...review, motivation_rating: newValue });
                                        }}
                                    />
                                </Grid>
                                <Grid item md={5} sm={12} xs={12}>
                                    <Typography variant="subtitle2">Self-knowledge</Typography>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <StyledRating
                                        value={review.self_knowledge_rating}
                                        data-testid="self_knowledge_rating"
                                        onChange={(event, newValue) => {
                                            setReview({ ...review, self_knowledge_rating: newValue });
                                        }}
                                    />
                                </Grid>
                                <Grid item md={5} sm={12} xs={12}>
                                    <Typography variant="subtitle2">Hard Skills</Typography>
                                </Grid>
                                <Grid item md={6} sm={12} xs={12}>
                                    <StyledRating
                                        value={review.hard_skill_rating}
                                        data-testid="hard_skill_rating"
                                        onChange={(event, newValue) => {
                                            setReview({ ...review, hard_skill_rating: newValue });
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ width: '90%', margin: '20px auto' }}>
                            <TermsMessage />
                        </Grid>

                        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
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

ReviewTheApplicantModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired,
    handleValidate: PropTypes.func.isRequired,
    setReview: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    review: PropTypes.object.isRequired,
    errorMessage: PropTypes.string.isRequired,
};

export default ReviewTheApplicantModal;
