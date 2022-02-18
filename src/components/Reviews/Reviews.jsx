import React, { Fragment, useEffect, useState } from 'react';
import { Box, Pagination, Stack } from '@mui/material';
import { ReviewCard } from '../ReviewCard';
import { FilterReviews } from '../FilterReviews';
import { SideInfo } from '../SideInfo';

import { sortName } from '../../utils';
import api from '../../services/api';
import config from '../../config';

const Reviews = () => {
    const [reasons, setReasons] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [page, setPage] = useState(1);
    const [reviewsCount, setReviewsCount] = useState(0);
    const [data, setData] = useState([]);
    const [sortCriteria, setSortCriteria] = useState({ sortKey: 'created_at', orientation: 'asc' });
    const [filterValue, setFilterValue] = useState('job_title');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch(`${config.api}reporting-reason-types`)
            .then((res) => res.json())
            .then((obj) => setReasons(obj));
    }, []);

    const toggleSortCriteria = (sortKey) => {
        const orientation =
            sortCriteria.sortKey === sortKey ? (sortCriteria.orientation === 'asc' ? 'desc' : 'asc') : 'asc';
        setSortCriteria({ sortKey, orientation });
    };

    const handleQueries = () => {
        const sortQuery = `&${sortName(sortCriteria.sortKey).toLowerCase()}=${sortCriteria.orientation}`;
        const filterQuery = `&${filterValue}=${searchQuery}`;
        let queries = sortQuery;
        if (searchQuery.length > 0) queries += filterQuery;

        return queries;
    };

    useEffect(() => {
        api.companyEvaluations
            .listReviews(1, page, handleQueries())
            .then((response) => response.json())
            .then((result) => {
                setIsLoaded(true);
                setData(result.items);
                setReviewsCount(result.total);
            })
            .catch((e) => {
                setIsLoaded(true);
                setError(e);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, sortCriteria, searchQuery]);

    const handlePage = (e, v) => {
        setIsLoaded(false);
        setPage(v);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSearch = (query, attribute) => {
        setFilterValue(attribute);
        setSearchQuery(query);
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
                reviewsQuantity={data.length}
                reviewsCount={reviewsCount}
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
                {data.map((review) => (
                    <ReviewCard key={review.id} review={review} reasons={reasons} />
                ))}
            </Box>
            <SideInfo />
            <Box
                sx={{
                    mb: 3,
                    display: 'grid',
                    justifyContent: 'center',
                }}
            >
                <Stack spacing={2}>
                    <Pagination
                        color="secondary"
                        count={Math.ceil(reviewsCount / 10)}
                        disabled={Math.ceil(reviewsCount / 10) < 1}
                        page={page}
                        onChange={handlePage}
                    />
                </Stack>
            </Box>
        </Fragment>
    );
};

export default Reviews;
