import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Pagination, Stack } from '@mui/material';
import { ReviewCard } from '../ReviewCard';
import { FilterReviews } from '../FilterReviews';
import { SideInfo } from '../SideInfo';

import api from '../../services/api';
import config from '../../config';

const Reviews = ({ isMobile }) => {
    const [reasons, setReasons] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [page, setPage] = useState(1);
    const [reviewsCount, setReviewsCount] = useState(0);
    const [list, setList] = useState([]);
    const [data, setData] = useState([]);
    const [sortCriteria, setSortCriteria] = useState({ sortKey: 'created_at', orientation: 'asc' });

    useEffect(() => {
        fetch(`${config.api}reporting-reason-types`)
            .then((res) => res.json())
            .then((obj) => setReasons(obj));
    }, []);

    useEffect(() => {
        api.companyEvaluations
            .listReviews(1, page)
            .then((response) => response.json())
            .then((result) => {
                setIsLoaded(true);
                setList(result.items);
                setData(result.items);
                setReviewsCount(result.total);
            })
            .catch((e) => {
                setIsLoaded(true);
                setError(e);
            });
    }, [page]);

    const handlePage = (e, v) => {
        setIsLoaded(false);
        setPage(v);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                reviewsQuantity={list.length}
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
                {list.map((review) => (
                    <ReviewCard key={review.id} review={review} reasons={reasons} />
                ))}
            </Box>
            <SideInfo isMobile={isMobile} />
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

Reviews.propTypes = {
    isMobile: PropTypes.bool.isRequired,
};

export default Reviews;
