import React from 'react';
import Container from '@mui/material/Container';

import { GeneralCompanyRate } from '../components/GeneralCompanyRate';
import CompanyTabs from '../components/CompanyTabs';

const Company = () => {
    return (
        <Container>
            <GeneralCompanyRate />
            <CompanyTabs />
        </Container>
    );
};
export default Company;
