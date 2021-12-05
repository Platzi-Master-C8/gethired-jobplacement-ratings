import React from 'react';
import Container from '@mui/material/Container';

import { GeneralCompanyRate } from '../components/GeneralCompanyRate';
import CompanyTabs from '../components/CompanyTabs';

import { ReviewTheApplicantForm } from '../components/ReviewTheApplicantForm';

const Company = () => {
    return (
        <Container>
            <GeneralCompanyRate />
            <CompanyTabs />
            <ReviewTheApplicantForm />
        </Container>
    );
};
export default Company;
