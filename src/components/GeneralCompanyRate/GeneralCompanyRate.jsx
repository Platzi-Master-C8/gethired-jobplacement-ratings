import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CompanyReviewForm } from '../CompanyReviewForm';
import './GeneralCompanyRate.scss';

const GeneralCompanyRate = ({ data, handleReload }) => (
    <Card elevation={0} sx={{ padding: '40px' }}>
        <Grid container spacing={2}>
            <Grid item sm={12} md={3}>
                <CardMedia
                    sx={{ borderRadius: '12px' }}
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
            </Grid>
            <Grid item sm={12} md={5}>
                <Typography variant="h1">{data.company_information.name}</Typography>
                <Box sx={{ display: 'flex', alignContent: 'flex-end', gap: '5px' }}>
                    <Typography variant="subtitle1">{data.company_rating}</Typography>
                    <Rating readOnly value={data.company_rating} precision={0.5} />
                    <Typography variant="overline">{data.total_reviews} reviews</Typography>
                </Box>
            </Grid>
            <Grid item sm={12} md={4} sx={{ display: 'grid', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <CompanyReviewForm company_id={data.company_information.id} handleReload={handleReload} />
            </Grid>
        </Grid>
    </Card>
);

GeneralCompanyRate.propTypes = {
    data: PropTypes.shape({
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
    handleReload: PropTypes.func.isRequired,
};

export default GeneralCompanyRate;
