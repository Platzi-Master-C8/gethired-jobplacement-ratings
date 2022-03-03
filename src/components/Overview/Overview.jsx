import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Typography, Avatar, Rating } from '@mui/material';
import { RadarChart } from '../Charts';
import companyLogo from '../../assets/platzi-logo.png';

import { RatingItem } from '../RatingItem';

const ChartContainer = styled(Grid)`
    position: relative;
    height: 400px;
    width: 100%;

    @media (max-width: 580px) {
        width: 85vw;
    }
`;

const CompanyAvatar = styled(Avatar)`
    img {
        object-fit: contain !important;
    }
`;

const Overview = ({ info }) => (
    <Grid container spacing={2} textAlign="center">
        <Grid item md={3} sm={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CompanyAvatar alt="companyLogo" src={companyLogo} sx={{ width: 100, height: 100, marginBottom: '50px' }} />
            <Grid item>
                <Typography>{info.company_information.description}</Typography>
            </Grid>
        </Grid>
        <Grid item md={6} sm={12}>
            <ChartContainer>
                <RadarChart info={info} />
            </ChartContainer>
            <Grid>
                <Typography variant="h1">{info.company_rating}</Typography>
                <Rating readOnly value={info.company_rating} precision={0.5} />
                <Typography>{info.total_reviews} reviews</Typography>
            </Grid>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
            <Typography variant="h1" fontSize={20} fontWeight={700}>
                Rating by category
            </Typography>
            <RatingItem title="Carrer development" rating={info.gral_career_development_rating} />
            <RatingItem title="Equal Opportunity" rating={info.gral_diversity_equal_opportunity_rating} />
            <RatingItem title="Working Environment" rating={info.gral_working_environment_rating} />
            <RatingItem title="Salary" rating={info.gral_salary_rating} />
        </Grid>
    </Grid>
);

Overview.propTypes = {
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

export default Overview;
