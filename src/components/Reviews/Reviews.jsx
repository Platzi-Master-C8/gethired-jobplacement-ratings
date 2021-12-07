import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { ReviewCard } from '../ReviewCard';

import api from '../../services/api';

const Reviews = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [list, setList] = useState([]);

    useEffect(() => {
        try {
            const result = api.companyEvaluations.mockDataList();

            setIsLoaded(true);
            setList(result);
        } catch (e) {
            setIsLoaded(true);
            setError(e);
        }
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <Box
            sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 25rem), 1fr))',
                p: 1,
            }}
        >
            {list.map((review) => (
                <ReviewCard key={review.id} review={review} />
            ))}
        </Box>
    );
};

export default Reviews;
