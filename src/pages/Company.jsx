import React from 'react';
import Container from '@mui/material/Container';
import { Header } from '@master-c8/commons';

import { GeneralCompanyRate } from '../components/GeneralCompanyRate';
import CompanyTabs from '../components/CompanyTabs';

import { ReviewTheApplicantForm } from '../components/ReviewTheApplicantForm';
import { ReviewApplicationProcessForm } from '../components/ReviewApplicationProcess';

// Tabs
import { Reviews } from '../components/Reviews';
import { Overview } from '../components/Overview';

const tabsOptions = [
    { tabKey: 'Overview', tabContent: <Overview /> },
    { tabKey: 'Reviews', tabContent: <Reviews /> },
    { tabKey: 'Jobs', tabContent: 'Jobs' },
];

const Company = () => {
    return (
        <Container>
            <Header isLogged />
            <GeneralCompanyRate />
            <CompanyTabs tabsOptions={tabsOptions} />
            <ReviewTheApplicantForm />
            <ReviewApplicationProcessForm />
        </Container>
    );
};
export default Company;
