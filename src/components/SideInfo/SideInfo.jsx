import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import StarIcon from '@mui/icons-material/Star';
import { Grid, Box, Typography, Button, SwipeableDrawer, LinearProgress } from '@mui/material';

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

const RatingItem = ({ title, rating }) => (
    <Grid item sx={{ margin: '0.8rem 0 1.3rem' }}>
        <GridFlex>
            <Typography>{title}</Typography>
            <GridFlex item>
                <Typography variant="h2" fontSize={17}>
                    {rating.toFixed(1)}
                </Typography>
                <StarIcon color="primary" fontSize="17px" />
            </GridFlex>
        </GridFlex>
        <LinearProgress variant="determinate" value={(rating * 100) / 5} sx={{ height: 8, borderRadius: 5 }} />
    </Grid>
);

const SideInfo = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <Box>
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: '30rem',
                        top: '20%',
                        width: '25rem',
                        borderRadius: '20px',
                    },
                }}
            />
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
                                Based on 142 reviews
                            </Typography>
                        </Grid>
                        <GridFlex item>
                            <Typography variant="h1" fontSize={25} margin="0 7px">
                                4.5
                            </Typography>
                            <StarIcon sx={{ color: '#edd309', fontSize: '30px' }} />
                        </GridFlex>
                    </GridFlex>
                    <Grid item>
                        <Typography variant="h2" fontSize={17} fontWeight={700}>
                            Rating by category
                        </Typography>
                        <RatingItem title="Job advancements" rating={4.5} />
                        <RatingItem title="Benefits and perks" rating={3.0} />
                        <RatingItem title="Work/life balance" rating={4.5} />
                        <RatingItem title="Working Enviorment" rating={4.0} />
                        <RatingItem title="Culture" rating={5.0} />
                    </Grid>
                </GridContainer>
            </SwipeableDrawer>
        </Box>
    );
};

RatingItem.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

export default SideInfo;
