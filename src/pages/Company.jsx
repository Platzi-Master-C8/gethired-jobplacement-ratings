import React from 'react';
import Container from '@mui/material/Container';
import { Header } from '@master-c8/commons';

import { GeneralCompanyRate } from '../components/GeneralCompanyRate';
import CompanyTabs from '../components/CompanyTabs';

import { ReviewTheApplicantForm } from '../components/ReviewTheApplicantForm';
import { ReviewApplicationProcessForm } from '../components/ReviewApplicationProcess';
import { SideInfo } from '../components/SideInfo';

const Company = () => {
    return (
        <Container>
            <Header isLogged />
            <GeneralCompanyRate />
            <CompanyTabs />
            <ReviewTheApplicantForm />
            <ReviewApplicationProcessForm />
            <SideInfo />
        </Container>
    );
};
export default Company;
