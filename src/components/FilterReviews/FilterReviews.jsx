import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box, Button, InputLabel, FormControl, MenuItem, TextField, Typography, Select } from '@mui/material';

const FilterReviewsWrapper = styled.div`
    background-color: #ddd;
    border-radious: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
`;

const TextFieldS = styled(TextField)`
    background-color: #fff;
    border-radius: 4px;
    margin: 0 1rem;
    width: 50%;
    @media (max-width: 768px) {
        width: 40%;
    }
    @media (max-width: 480px) {
        width: 100%;
        margin: 1rem 0;
    }
`;

const FormControlS = styled(FormControl)`
    background-color: #fff;
    border-radius: 4px;
    width: 35%;
    @media (max-width: 768px) {
        width: 30%;
    }
    @media (max-width: 480px) {
        width: 100%;
    }
`;

const RowBox = styled(Box)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

const SortBox = styled(RowBox)`
    @media (max-width: 480px) {
        flex-direction: row;
        margin-top: 1rem;
    }
`;

const FilterReviews = ({ handleSearch, sortCriteria, toggleSortCriteria }) => {
    const [filterValue, setFilterValue] = useState('job_title');
    const [searchQuery, setSearchQuery] = useState('');

    const handleEnter = (e) => {
        if (e.key === 'Enter') handleSearch(searchQuery, filterValue);
    };

    return (
        <FilterReviewsWrapper>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderBottom: '2px solid #FFF',
                }}
            >
                <Typography variant="subtitle1" sx={{ mb: 2 }}>
                    Search Reviews
                </Typography>
                <RowBox sx={{ mb: 2 }}>
                    <FormControlS>
                        <InputLabel id="filter-select-label">Search criteria</InputLabel>
                        <Select
                            labelId="filter-select-label"
                            id="filter-select"
                            value={filterValue}
                            label="Search criteria"
                            onChange={(e) => setFilterValue(e.target.value)}
                        >
                            <MenuItem value="job_title">Job title</MenuItem>
                            <MenuItem value="content_type">Review content</MenuItem>
                            <MenuItem value="job_location">Location</MenuItem>
                        </Select>
                    </FormControlS>
                    <TextFieldS
                        id="search-input"
                        label="Search Reviews"
                        variant="outlined"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={handleEnter}
                    />
                    <Button variant="contained" onClick={() => handleSearch(searchQuery, filterValue)}>
                        Search
                    </Button>
                </RowBox>
            </Box>
            <RowBox sx={{ mt: 2 }}>
                <Typography variant="subtitle1" sx={{ mr: 2 }}>
                    Sort by:
                </Typography>
                <SortBox>
                    <Button
                        variant={sortCriteria.sortKey === 'utility_counter' ? 'contained' : 'outlined'}
                        endIcon={
                            sortCriteria.sortKey === 'utility_counter' ? (
                                sortCriteria.orientation === 'desc' ? (
                                    <ArrowUpwardIcon />
                                ) : (
                                    <ArrowDownwardIcon />
                                )
                            ) : null
                        }
                        onClick={() => toggleSortCriteria('utility_counter')}
                    >
                        Helpfulness
                    </Button>
                    <Button
                        variant={sortCriteria.sortKey === 'weighted_average_per_evaluation' ? 'contained' : 'outlined'}
                        endIcon={
                            sortCriteria.sortKey === 'weighted_average_per_evaluation' ? (
                                sortCriteria.orientation === 'desc' ? (
                                    <ArrowUpwardIcon />
                                ) : (
                                    <ArrowDownwardIcon />
                                )
                            ) : null
                        }
                        onClick={() => toggleSortCriteria('weighted_average_per_evaluation')}
                    >
                        Rating
                    </Button>
                    <Button
                        variant={sortCriteria.sortKey === 'created_at' ? 'contained' : 'outlined'}
                        endIcon={
                            sortCriteria.sortKey === 'created_at' ? (
                                sortCriteria.orientation === 'desc' ? (
                                    <ArrowUpwardIcon />
                                ) : (
                                    <ArrowDownwardIcon />
                                )
                            ) : null
                        }
                        onClick={() => toggleSortCriteria('created_at')}
                    >
                        Date
                    </Button>
                </SortBox>
            </RowBox>
        </FilterReviewsWrapper>
    );
};

FilterReviews.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    sortCriteria: PropTypes.shape({
        sortKey: PropTypes.string.isRequired,
        orientation: PropTypes.string.isRequired,
    }).isRequired,
    toggleSortCriteria: PropTypes.func.isRequired,
};

export default FilterReviews;
