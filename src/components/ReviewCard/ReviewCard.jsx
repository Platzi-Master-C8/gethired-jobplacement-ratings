import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Button, Grid, Rating, Typography, Card, CardHeader, CardContent, CardActions } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import FlagIcon from '@mui/icons-material/Flag';

const StyledRating = styled(Rating)`
    font-size: 1rem;
`;

const HeaderReview = ({ rating }) => (
    <Box>
        <Typography sx={{ ml: 3 }} variant="subtitle1">
            {rating.toFixed(1)}
        </Typography>
        <StyledRating name="read-only" value={rating} readOnly />
    </Box>
);

const SubheaderReview = ({ createdAt, isStillWorkingHere, jobTitle }) => (
    <Box>
        <Typography variant="body2">{jobTitle}</Typography>
        <Typography variant="body2">
            {`(${isStillWorkingHere ? 'Current Employee' : 'Former Employee'})`} - {createdAt}
        </Typography>
    </Box>
);

const ActionsReview = ({ nonUtilityCounter, utilityCounter }) => (
    <CardContent>
        <Typography variant="body1">Was this review helpful?</Typography>
        <CardActions disableSpacing>
            <Button>
                <ThumbUpAltIcon />
                <Typography variant="button2">Yes {utilityCounter}</Typography>
            </Button>
            <Button>
                <ThumbDownAltIcon />
                <Typography variant="button2">No {nonUtilityCounter}</Typography>
            </Button>
            <Button sx={{ ml: 'auto' }}>
                <FlagIcon />
                <Typography variant="button2">Report</Typography>
            </Button>
        </CardActions>
    </CardContent>
);

const ReviewCard = ({ review }) => {
    const {
        contentType,
        createdAt,
        isStillWorkingHere,
        jobTitle,
        nonUtilityCounter,
        utilityCounter,
        weightedAveragePerEvaluation,
    } = review;

    return (
        <Grid item xs={6}>
            <Card sx={{ border: 1, minHeight: 350, maxHeight: 350 }}>
                <CardHeader
                    title={<HeaderReview rating={weightedAveragePerEvaluation} />}
                    subheader={
                        <SubheaderReview
                            createdAt={createdAt}
                            isStillWorkingHere={isStillWorkingHere}
                            jobTitle={jobTitle}
                        />
                    }
                />
                <CardContent sx={{ minHeight: 100, maxHeight: 100 }}>
                    <Typography variant="body1">{contentType}</Typography>
                </CardContent>
                <ActionsReview nonUtilityCounter={nonUtilityCounter} utilityCounter={utilityCounter} />
            </Card>
        </Grid>
    );
};

HeaderReview.propTypes = {
    rating: PropTypes.number.isRequired,
};

SubheaderReview.propTypes = {
    createdAt: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    isStillWorkingHere: PropTypes.string.isRequired,
};

ActionsReview.propTypes = {
    nonUtilityCounter: PropTypes.number.isRequired,
    utilityCounter: PropTypes.number.isRequired,
};

ReviewCard.propTypes = {
    review: PropTypes.shape({
        contentType: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        isStillWorkingHere: PropTypes.oneOf([0, 1]).isRequired,
        jobTitle: PropTypes.string.isRequired,
        nonUtilityCounter: PropTypes.number.isRequired,
        utilityCounter: PropTypes.number.isRequired,
        weightedAveragePerEvaluation: PropTypes.number.isRequired,
    }).isRequired,
};

export default ReviewCard;
