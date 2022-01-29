import React from 'react';
import Container from '@mui/material/Container';
import { Header } from '@master-c8/commons';

import { GeneralCompanyRate } from '../components/GeneralCompanyRate';
import CompanyTabs from '../components/CompanyTabs';

// Tabs
import { Reviews } from '../components/Reviews';
import { Overview } from '../components/Overview';
import { Jobs } from '../components/Jobs';

import { useMediaQuery } from '../hooks';

const Company = () => {
    const isMobile = useMediaQuery('(max-width: 480px)');

    return (
        <Container>
            <Header isLogged />
            <GeneralCompanyRate />
            <CompanyTabs
                tabsOptions={[
                    { tabKey: 'Overview', tabContent: <Overview /> },
                    { tabKey: 'Reviews', tabContent: <Reviews isMobile={isMobile} /> },
                    { tabKey: 'Jobs', tabContent: <Jobs /> },
                ]}
            />
        </Container>
    );
};
export default Company;
