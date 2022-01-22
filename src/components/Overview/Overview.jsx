import React, { useEffect, useState } from 'react';
import { Grid, Typography, Avatar, Rating, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styled from 'styled-components';
import { RadarChart, LineChart } from '../Charts';

import { RatingItem } from '../RatingItem';

import api from '../../services/api';

const ChartContainer = styled(Grid)`
    position: relative;
    height: 400px;
    width: 100%;

    @media (max-width: 580px) {
        width: 85vw;
    }
`;

const Overview = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [review, setReview] = useState({});
    const [display, setDisplay] = useState('none');

    useEffect(() => {
        const data = api.companyEvaluations.mockDataOverallReview();
        setReview(...data);
        setIsLoaded(true);
    }, [review]);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    const handleClick = () => {
        switch (display) {
            case 'none':
                setDisplay('block');
                break;
            case 'block':
                setDisplay('none');
                break;
            default:
                setDisplay('none');
                break;
        }
    };

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
                <ChartContainer>
                    <RadarChart />
                </ChartContainer>
                <Grid>
                    <Typography variant="h1">{review.overall_rating}</Typography>
                    <Rating readOnly value={review.overall_rating} precision={0.5} />
                    <Typography>{review.total_reviews} ratings</Typography>
                    <IconButton onClick={handleClick}>
                        <ArrowDropDownIcon sx={{ fontSize: '4rem' }} />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item md={3} sm={12} xs={12}>
                <Typography variant="h1" fontSize={20} fontWeight={700}>
                    Rating by category
                </Typography>
                <RatingItem title="Job advancements" rating={review.job_advancements} />
                <RatingItem title="Benefits and perks" rating={review.benefits} />
                <RatingItem title="Work/life balance" rating={review.work_life_balance} />
                <RatingItem title="Working Enviorment" rating={review.working_eviorment} />
                <RatingItem title="Culture" rating={review.culture} />
            </Grid>
            <Grid item md={12} sx={{ display }}>
                <LineChart />
            </Grid>
        </Grid>
    );
};

export default Overview;
