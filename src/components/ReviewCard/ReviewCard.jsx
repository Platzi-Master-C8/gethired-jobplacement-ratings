import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    Box,
    Card,
    Button,
    Rating,
    Typography,
    CardHeader,
    CardContent,
    CardActions,
    ToggleButtonGroup,
    ToggleButton,
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import FlagIcon from '@mui/icons-material/Flag';
import { UtilityModal } from '../UtilityModal';
import { ReportModal } from '../ReportModal';
import { SendModal } from '../SendModal';
import config from '../../config';

const StyledRating = styled(Rating)`
    font-size: 1rem;
`;

const HeaderReview = ({ rating }) => (
    <Box>
        <Typography sx={{ ml: 3 }} variant="subtitle1">
            {rating > 0 ? rating.toFixed(1) : 'NA'}
        </Typography>
        <StyledRating name="read-only" value={rating > 0 ? rating : 0} readOnly />
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

const ActionsReview = ({ company_id, non_utility_counter, utility_counter, reasons }) => {
    const [utilityError, setUtilityError] = useState(false);
    const [utilitySuccess, setUtilitySuccess] = useState(false);
    const [utility, setUtility] = useState('');
    const [openReport, setOpenReport] = useState(false);
    const [openSuccessModal, setOpenSuccessModal] = useState(false);

    const handleReportModal = (e, success) => {
        setOpenReport(false);
        if (success) {
            setOpenSuccessModal(true);
        }
    };

    const handleLikes = (e, newValue) => {
        const route = `increase-${newValue === 'like' ? 'utility' : 'non-utility'}-rating`;
        const url = `${config.api}company-evaluations/${company_id}/${route}`;
        fetch(url, {
            method: 'PATCH',
            headers: config.headers,
        })
            .then((res) => res.json())
            .then((data) => (data?.id ? setUtilitySuccess(true) : setUtilityError(true)))
            .catch(() => setUtilityError(true));
        setUtility(newValue);
    };

    const handleCloseSended = () => {
        setOpenSuccessModal(false);
    };

    const handleUtilityModal = () => {
        setUtilityError(false);
        setUtilitySuccess(false);
    };

    return (
        <CardContent>
            <Typography variant="body1">Was this review helpful?</Typography>
            <CardActions disableSpacing>
                <ToggleButtonGroup
                    exclusive
                    color="primary"
                    value={utility}
                    sx={{ '.MuiToggleButtonGroup-grouped': { border: 'none' } }}
                    onChange={handleLikes}
                >
                    <ToggleButton title={utility_counter} value="like">
                        <ThumbUpAltIcon />
                        <Typography variant="button2">Yes</Typography>
                    </ToggleButton>
                    <ToggleButton color="error" title={non_utility_counter} value="dislike">
                        <ThumbDownAltIcon />
                        <Typography variant="button2">No</Typography>
                    </ToggleButton>
                </ToggleButtonGroup>
                <Button color="info" sx={{ ml: 'auto' }} onClick={() => setOpenReport(true)}>
                    <FlagIcon />
                    <Typography variant="button2">Report</Typography>
                </Button>
            </CardActions>
            <ReportModal open={openReport} reasons={reasons} company_id={company_id} handleClose={handleReportModal} />
            <UtilityModal
                handleClose={handleUtilityModal}
                open={utilityError || utilitySuccess}
                message={utilitySuccess ? 'Thank you for your time!' : 'An error occurred, please try again'}
            />
            <SendModal
                open={openSuccessModal}
                handleClose={handleCloseSended}
                message="The report was sent correctly"
            />
        </CardContent>
    );
};

const ReviewCard = ({ review, reasons }) => {
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
                title={<HeaderReview rating={weighted_average_per_evaluation || -1} />}
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
                reasons={reasons}
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
    reasons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ReviewCard.propTypes = {
    reasons: PropTypes.arrayOf(PropTypes.string).isRequired,
    review: PropTypes.shape({
        company_id: PropTypes.string.isRequired,
        content_type: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        is_still_working_here: PropTypes.oneOf([0, 1]).isRequired,
        job_title: PropTypes.string.isRequired,
        non_utility_counter: PropTypes.number.isRequired,
        utility_counter: PropTypes.number.isRequired,
        weighted_average_per_evaluation: PropTypes.number,
    }).isRequired,
};

export default ReviewCard;
