import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import StarIcon from '@mui/icons-material/Star';
import { Grid, Box, Typography, Button, SwipeableDrawer } from '@mui/material';

import { RatingItem } from '../RatingItem';

import api from '../../services/api';

const globalStyles = (isMobile) => ({
    '.MuiDrawer-root > .MuiPaper-root': {
        height: '30rem',
        top: '20%',
        borderRadius: '20px',
        width: isMobile ? '90%' : '25rem',
    },
});

const GridContainer = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 30px',
    height: '100%',
    justifyContent: 'space-between',
}));

const GridFlex = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const SideInfo = ({ isMobile }) => {
    const [open, setOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [review, setReview] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        api.companyEvaluations
            .mockDataOverallReview()
            .then((res) => res)
            .then((data) => {
                setReview(...data);
                setIsLoaded(true);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err);
            });
    }, []);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    return (
        <Box>
            <Global styles={globalStyles(isMobile)} />
            <Box sx={{ position: 'fixed', top: '50%', right: '0' }}>
                <Button onClick={toggleDrawer(true)}>
                    <ArrowLeftIcon sx={{ fontSize: '3rem' }} />
                </Button>
            </Box>
            <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <GridContainer container>
                    <GridFlex item>
                        <Grid>
                            <Typography variant="h2" fontSize={25} fontWeight={800}>
                                Overall Rating
                            </Typography>
                            <Typography variant="body1" fontSize={16}>
                                Based on {review.total_reviews} reviews
                            </Typography>
                        </Grid>
                        <GridFlex item>
                            <Typography variant="h1" fontSize={25} margin="0 7px">
                                {review.overall_rating}
                            </Typography>
                            <StarIcon sx={{ color: '#edd309', fontSize: '30px' }} />
                        </GridFlex>
                    </GridFlex>
                    <Grid item>
                        <Typography variant="h2" fontSize={17} fontWeight={700}>
                            Rating by category
                        </Typography>
                        <RatingItem title="Job advancements" rating={review.job_advancements} />
                        <RatingItem title="Benefits and perks" rating={review.benefits} />
                        <RatingItem title="Work/life balance" rating={review.work_life_balance} />
                        <RatingItem title="Working Enviorment" rating={review.working_eviorment} />
                        <RatingItem title="Culture" rating={review.culture} />
                    </Grid>
                </GridContainer>
            </SwipeableDrawer>
        </Box>
    );
};

SideInfo.propTypes = {
    isMobile: PropTypes.bool.isRequired,
};

export default SideInfo;
