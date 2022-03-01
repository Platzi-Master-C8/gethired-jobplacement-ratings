import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import { Grid, Typography, LinearProgress } from '@mui/material';

const GridFlex = styled(Grid)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const RatingItem = ({ title, rating }) => {
    return (
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
};

RatingItem.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

export default RatingItem;
