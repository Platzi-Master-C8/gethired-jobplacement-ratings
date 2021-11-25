import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, Grid } from '@mui/material';
import { CompanyReview } from '../CompanyReview';

const TabPanel = ({ children, value, index }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const CompanyTabs = () => {
    const Reviews = ['Good', 'Regular', 'Bad'];
    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Overview" />
                    <Tab label="Reviews" />
                    <Tab label="Jobs" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Overview
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container spacing={2}>
                    {Reviews.map((review, i) => (
                        <Grid key={review} item sm={12} md={4} lg={3}>
                            <CompanyReview title={review} ind={i} />
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Jobs
            </TabPanel>
        </Box>
    );
};

export default CompanyTabs;