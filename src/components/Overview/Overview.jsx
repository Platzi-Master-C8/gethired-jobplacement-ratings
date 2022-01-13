import React from 'react';
import { Grid, Typography, Avatar, Rating } from '@mui/material';
import { RadarChart } from '../Charts';

const Overview = () => {
    return (
        <Grid container spacing={2} textAlign="center">
            <Grid item md={3} sm={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    sx={{ width: 100, height: 100, marginBottom: '50px' }}
                />
                <Grid item>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis, porro modi minima sit
                        magnam tenetur. Necessitatibus ipsa velit quisquam eveniet culpa iure blanditiis eius, enim
                        impedit quod sequi praesentium!
                    </Typography>
                </Grid>
            </Grid>
            <Grid item md={6} sm={12}>
                <Grid>
                    <RadarChart />
                </Grid>
                <Grid>
                    <Typography variant="h1">4.0</Typography>
                    <Rating readOnly value={4} />
                    <Typography>142 ratings</Typography>
                </Grid>
            </Grid>
            <Grid item md={3} sm={12}>
                Side component
            </Grid>
        </Grid>
    );
};

export default Overview;
