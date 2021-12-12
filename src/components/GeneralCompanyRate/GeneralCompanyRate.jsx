import React from 'react';
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Box } from '@mui/system';
import { CompanyReviewForm } from '../CompanyReviewForm';
import './GeneralCompanyRate.scss';

const GeneralCompanyRate = () => (
    <Card marginTop={3}>
        <Grid container spacing={2}>
            <Grid item sm={12} md={3}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
            </Grid>
            <Grid item sm={12} md={5}>
                <Typography variant="h1">Company</Typography>
                <Box sx={{ display: 'flex', alignContent: 'flex-end', gap: '5px' }}>
                    <Typography variant="subtitle1">4.2</Typography>
                    <StarRateIcon />
                    <StarRateIcon />
                    <StarRateIcon />
                    <StarRateIcon />
                    <StarHalfIcon />
                    <Typography variant="overline">123 reviews</Typography>
                </Box>
            </Grid>
            <Grid item sm={12} md={4} sx={{ display: 'grid', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <CompanyReviewForm />
            </Grid>
        </Grid>
    </Card>
);

export default GeneralCompanyRate;
