import React from 'react';
import PropTypes from 'prop-types';
import './CompanyReview.scss';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

const CompanyReview = ({ title }) => (
    <Card>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {title}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
);

CompanyReview.propTypes = {
    title: PropTypes.string.isRequired,
};

export default CompanyReview;
