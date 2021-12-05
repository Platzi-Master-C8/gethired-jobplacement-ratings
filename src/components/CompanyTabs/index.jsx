import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box } from '@mui/material';
import { Reviews } from '../Reviews';

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
                <Reviews />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Jobs
            </TabPanel>
        </Box>
    );
};

export default CompanyTabs;
