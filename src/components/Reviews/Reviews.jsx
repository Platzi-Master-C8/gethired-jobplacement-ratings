import React, { Fragment, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { ReviewCard } from '../ReviewCard';
import { FilterReviews } from '../FilterReviews';

import api from '../../services/api';

const Reviews = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [list, setList] = useState([]);
    const [data, setData] = useState([]);
    const [sortCriteria, setSortCriteria] = useState({ sortKey: 'created_at', orientation: 'asc' });

    useEffect(() => {
        api.companyEvaluations
            .listReviews(1)
            .then((response) => response.json())
            .then((result) => {
                setIsLoaded(true);
                setList(result);
                setData(result);
            })
            .catch((e) => {
                setIsLoaded(true);
                setError(e);
            });
    }, []);

    const handleSearch = (query, attribute) => {
        setList(data.filter((x) => x[attribute].toLowerCase().includes(query.toLowerCase().trim())));
    };

    const toggleSortCriteria = (sortKey) => {
        const orientation =
            sortCriteria.sortKey === sortKey ? (sortCriteria.orientation === 'asc' ? 'desc' : 'asc') : 'asc';
        const sortedList = list.sort((a, b) =>
            a[sortKey] > b[sortKey] ? (orientation === 'asc' ? 1 : -1) : orientation === 'asc' ? -1 : 1,
        );
        setList(sortedList);
        setSortCriteria({ sortKey, orientation });
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <Fragment>
            <FilterReviews
                handleSearch={handleSearch}
                sortCriteria={sortCriteria}
                toggleSortCriteria={toggleSortCriteria}
            />
            <Box
                sx={{
                    display: 'grid',
                    gap: 2,
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 25rem), 1fr))',
                    p: 1,
                    my: 2,
                }}
            >
                {list.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </Box>
        </Fragment>
    );
};

export default Reviews;
