import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Card, Button, Rating, Typography, CardHeader, CardContent, CardActions } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import FlagIcon from '@mui/icons-material/Flag';
import { ReportModal } from '../ReportModal';
import { SendModal } from '../SendModal';

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

const SubheaderReview = ({ created_at, is_still_working_here, job_title }) => (
    <Box>
        <Typography variant="body2">{job_title}</Typography>
        <Typography variant="body2">
            {`(${is_still_working_here ? 'Current Employee' : 'Former Employee'})`} -{' '}
            {moment(created_at).format('MMM DD, YYYY')}
        </Typography>
    </Box>
);

const ActionsReview = ({ company_id, non_utility_counter, utility_counter }) => {
    const [openReport, setOpenReport] = useState(false);
    const [openSuccessModal, setOpenSuccessModal] = useState(false);

    const handleReportModal = (success) => {
        setOpenReport(false);
        if (success) {
            setOpenSuccessModal(true);
        }
    };

    const handleCloseSended = () => {
        setOpenSuccessModal(false);
    };
    return (
        <CardContent>
            <Typography variant="body1">Was this review helpful?</Typography>
            <CardActions disableSpacing>
                <Button title={utility_counter}>
                    <ThumbUpAltIcon />
                    <Typography variant="button2">Yes</Typography>
                </Button>
                <Button title={non_utility_counter}>
                    <ThumbDownAltIcon />
                    <Typography variant="button2">No</Typography>
                </Button>
                <Button sx={{ ml: 'auto' }} onClick={() => setOpenReport(true)}>
                    <FlagIcon />
                    <Typography variant="button2">Report</Typography>
                </Button>
            </CardActions>
            <ReportModal
                open={openReport}
                company_id={company_id}
                handleClose={handleReportModal}
            />
            <SendModal
                open={openSuccessModal}
                handleClose={handleCloseSended}
                message="The report was sent correctly"
            />
        </CardContent>
    );
};

const ReviewCard = ({ review }) => {
    const {
        job_title,
        created_at,
        company_id,
        content_type,
        utility_counter,
        non_utility_counter,
        is_still_working_here,
        weighted_average_per_evaluation,
    } = review;

    return (
        <Card sx={{ border: 1, minHeight: 350, maxHeight: 350 }}>
            <CardHeader
                title={<HeaderReview rating={weighted_average_per_evaluation} />}
                subheader={
                    <SubheaderReview
                        created_at={created_at}
                        is_still_working_here={is_still_working_here}
                        job_title={job_title}
                    />
                }
            />
            <CardContent sx={{ minHeight: 100, maxHeight: 100 }}>
                <Typography variant="body1">{content_type}</Typography>
            </CardContent>
            <ActionsReview
                company_id={company_id}
                utility_counter={utility_counter}
                non_utility_counter={non_utility_counter}
            />
        </Card>
    );
};

HeaderReview.propTypes = {
    rating: PropTypes.number.isRequired,
};

SubheaderReview.propTypes = {
    created_at: PropTypes.string.isRequired,
    job_title: PropTypes.string.isRequired,
    is_still_working_here: PropTypes.oneOf([0, 1]).isRequired,
};

ActionsReview.propTypes = {
    company_id: PropTypes.string.isRequired,
    utility_counter: PropTypes.number.isRequired,
    non_utility_counter: PropTypes.number.isRequired,
};

ReviewCard.propTypes = {
    review: PropTypes.shape({
        company_id: PropTypes.string.isRequired,
        content_type: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        is_still_working_here: PropTypes.oneOf([0, 1]).isRequired,
        job_title: PropTypes.string.isRequired,
        non_utility_counter: PropTypes.number.isRequired,
        utility_counter: PropTypes.number.isRequired,
        weighted_average_per_evaluation: PropTypes.number.isRequired,
    }).isRequired,
};

export default ReviewCard;
