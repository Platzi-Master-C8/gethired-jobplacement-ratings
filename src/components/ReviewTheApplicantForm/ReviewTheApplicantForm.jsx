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

import { styled } from '@mui/material/styles';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const CustomBox = styled(Box)({
    display: 'flex',

    '& .MuiSvgIcon-root': {
        fontSize: 30,
        cursor: 'pointer',
        margin: '0 10px',
    },
});

const boxStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '45%',
    height: '75%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflow: 'hidden',
};

const ReviewTheApplicantForm = () => {
    const [open, setOpen] = useState(false);

    const [review, setReview] = useState({
        applicant_name: '',
        is_hired: null,
        communication_rating: undefined,
        confidence_rating: undefined,
        negotiation_rating: undefined,
        motivation_rating: undefined,
        self_knowledge_rating: undefined,
        hard_skill_rating: undefined,
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
                <Button onClick={handleOpen}>Review the applicant </Button>
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
                            Review the Applicant
                        </Typography>
                        <Grid container marginTop={5}>
                            <Grid item md={6}>
                                <Typography variant="subtitle1" marginBottom="20px" sx={{ fontSize: 18 }}>
                                    Applicant name
                                </Typography>
                                <FormControl sx={{ width: '85%' }} required>
                                    <OutlinedInput
                                        id="applicant_name"
                                        name="applicant_name"
                                        placeholder="Aplicant name"
                                        value={review.applicant_name}
                                        onChange={handleInput}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6}>
                                <Typography variant="subtitle1" marginBottom="30px" sx={{ fontSize: 18 }}>
                                    Was he/she hired?
                                </Typography>
                                <FormControl component="fieldset" required>
                                    <RadioGroup
                                        id="is_hired"
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
                            <Grid container rowSpacing={1} alignItems="center" marginTop="5px">
                                <Grid item md={5} sm={12}>
                                    <Typography variant="subtitle2">Communication</Typography>
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <CustomBox>
                                        {[...Array(5)].map((star, index) => (
                                            <div>
                                                {index < review.communication_rating ? (
                                                    <StarIcon
                                                        onClick={() =>
                                                            setReview({ ...review, communication_rating: index + 1 })
                                                        }
                                                        sx={{ fontSize: 30 }}
                                                    />
                                                ) : (
                                                    <StarBorderIcon
                                                        onClick={() =>
                                                            setReview({ ...review, communication_rating: index + 1 })
                                                        }
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </CustomBox>
                                </Grid>
                                <Grid item md={5} sm={12}>
                                    <Typography variant="subtitle2">Confidence</Typography>
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <CustomBox>
                                        {[...Array(5)].map((star, index) => (
                                            <div>
                                                {index < review.confidence_rating ? (
                                                    <StarIcon
                                                        onClick={() =>
                                                            setReview({ ...review, confidence_rating: index + 1 })
                                                        }
                                                    />
                                                ) : (
                                                    <StarBorderIcon
                                                        onClick={() =>
                                                            setReview({ ...review, confidence_rating: index + 1 })
                                                        }
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </CustomBox>
                                </Grid>
                                <Grid item md={5} sm={12}>
                                    <Typography variant="subtitle2">Negotiation</Typography>
                                </Grid>
                                <Grid item md={6}>
                                    <CustomBox>
                                        {[...Array(5)].map((star, index) => (
                                            <div>
                                                {index < review.negotiation_rating ? (
                                                    <StarIcon
                                                        onClick={() =>
                                                            setReview({ ...review, negotiation_rating: index + 1 })
                                                        }
                                                    />
                                                ) : (
                                                    <StarBorderIcon
                                                        onClick={() =>
                                                            setReview({ ...review, negotiation_rating: index + 1 })
                                                        }
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </CustomBox>
                                </Grid>
                                <Grid item md={5} sm={12}>
                                    <Typography variant="subtitle2">Motivation</Typography>
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <CustomBox>
                                        {[...Array(5)].map((star, index) => (
                                            <div>
                                                {index < review.motivation_rating ? (
                                                    <StarIcon
                                                        onClick={() =>
                                                            setReview({ ...review, motivation_rating: index + 1 })
                                                        }
                                                    />
                                                ) : (
                                                    <StarBorderIcon
                                                        onClick={() =>
                                                            setReview({ ...review, motivation_rating: index + 1 })
                                                        }
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </CustomBox>
                                </Grid>
                                <Grid item md={5} sm={12}>
                                    <Typography variant="subtitle2">Self-knowledge</Typography>
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <CustomBox>
                                        {[...Array(5)].map((star, index) => (
                                            <div>
                                                {index < review.self_knowledge_rating ? (
                                                    <StarIcon
                                                        onClick={() =>
                                                            setReview({ ...review, self_knowledge_rating: index + 1 })
                                                        }
                                                    />
                                                ) : (
                                                    <StarBorderIcon
                                                        onClick={() =>
                                                            setReview({ ...review, self_knowledge_rating: index + 1 })
                                                        }
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </CustomBox>
                                </Grid>
                                <Grid item md={5} sm={12}>
                                    <Typography variant="subtitle2">Hard Skills</Typography>
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <CustomBox>
                                        {[...Array(5)].map((star, index) => (
                                            <div>
                                                {index < review.hard_skill_rating ? (
                                                    <StarIcon
                                                        onClick={() =>
                                                            setReview({ ...review, hard_skill_rating: index + 1 })
                                                        }
                                                    />
                                                ) : (
                                                    <StarBorderIcon
                                                        onClick={() =>
                                                            setReview({ ...review, hard_skill_rating: index + 1 })
                                                        }
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </CustomBox>
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
        </div>
    );
};

export default ReviewTheApplicantForm;
