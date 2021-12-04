import React from 'react';
// import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { ReviewCard } from '../ReviewCard';

// Import the api to petitions
// import api from '../../services/api'
// Fake Data for the Review Cards
import list from './list';

const Reviews = () => {
    // console.log(process.env.API_URL);
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [list, setList] = useState([]);

    // useEffect(() => {
    //   try {
    //     const result = await api.companyEvaluations.list();
    //     console.log(result);
    //     setIsLoaded(true);
    //     setList(result);
    //   } catch (error) {
    //     setIsLoaded(true);
    //     setError(error);
    //   }
    // }, []);
    const newList = list.map((review) => ({
        id: review.id,
        contentType: review.content_type,
        createdAt: review.created_at,
        isStillWorkingHere: review.is_still_working_here,
        jobTitle: review.job_title,
        nonUtilityCounter: review.non_utility_counter,
        utilityCounter: review.utility_counter,
        weightedAveragePerEvaluation: review.weighted_average_per_evaluation,
    }));

    return (
        <Grid container spacing={2} sx={{ p: 1 }}>
            {newList.map((review) => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </Grid>
    );
};

export default Reviews;
