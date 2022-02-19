import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import StarIcon from '@mui/icons-material/Star';
import { Grid, Box, Typography, Button, SwipeableDrawer } from '@mui/material';

import { RatingItem } from '../RatingItem';

import { useMediaQueryContext } from '../../context/MediaQueryContext';

const globalStyles = (isMobile) => ({
    '.MuiDrawer-root > .MuiPaper-root': {
        height: '30rem',
        top: '20%',
        borderRadius: '20px',
        width: isMobile.small ? '90%' : '25rem',
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

const SideInfo = ({ info }) => {
    const [open, setOpen] = useState(false);

    const isMobile = useMediaQueryContext();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <Box>
            <Global styles={globalStyles(isMobile)} />
            <Box sx={{ position: 'fixed', top: '50%', right: '0' }}>
                <Button onClick={toggleDrawer(true)} role="button">
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
                                Based on {info.total_reviews} reviews
                            </Typography>
                        </Grid>
                        <GridFlex item>
                            <Typography variant="h1" fontSize={25} margin="0 7px">
                                {info.company_rating}
                            </Typography>
                            <StarIcon sx={{ color: '#edd309', fontSize: '30px' }} />
                        </GridFlex>
                    </GridFlex>
                    <Grid item>
                        <Typography variant="h2" fontSize={17} fontWeight={700}>
                            Rating by category
                        </Typography>
                        <RatingItem title="Carrer development" rating={info.gral_career_development_rating} />
                        <RatingItem
                            title="Diversity and Equal Opportunity"
                            rating={info.gral_diversity_equal_opportunity_rating}
                        />
                        <RatingItem title="Working Environment" rating={info.gral_working_environment_rating} />
                        <RatingItem title="Salary" rating={info.gral_salary_rating} />
                    </Grid>
                </GridContainer>
            </SwipeableDrawer>
        </Box>
    );
};

SideInfo.propTypes = {
    info: PropTypes.shape({
        company_information: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            website: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            active: PropTypes.bool.isRequired,
        }).isRequired,
        company_rating: PropTypes.number.isRequired,
        total_reviews: PropTypes.number.isRequired,
        gral_career_development_rating: PropTypes.number.isRequired,
        gral_diversity_equal_opportunity_rating: PropTypes.number.isRequired,
        gral_working_environment_rating: PropTypes.number.isRequired,
        gral_salary_rating: PropTypes.number.isRequired,
    }).isRequired,
};

export default SideInfo;
