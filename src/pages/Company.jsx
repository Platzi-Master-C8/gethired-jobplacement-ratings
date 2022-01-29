import React from 'react';
import Container from '@mui/material/Container';
import { Header } from '@master-c8/commons';

import { GeneralCompanyRate } from '../components/GeneralCompanyRate';
import CompanyTabs from '../components/CompanyTabs';

// Tabs
import { Reviews } from '../components/Reviews';
import { Overview } from '../components/Overview';
import { Jobs } from '../components/Jobs';

const tabsOptions = [
    { tabKey: 'Overview', tabContent: <Overview /> },
    { tabKey: 'Reviews', tabContent: <Reviews /> },
    { tabKey: 'Jobs', tabContent: <Jobs /> },
];

const Company = () => {
    return (
        <Container>
            <Header isLogged />
            <GeneralCompanyRate />
            <CompanyTabs tabsOptions={tabsOptions} />
        </Container>
    );
};
export default Company;
