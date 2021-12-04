import React from 'react';

import { GeneralCompanyRate } from '../components/GeneralCompanyRate';
import CompanyTabs from '../components/CompanyTabs';
import { Reviews } from '../components/Reviews';
import { ReviewTheApplicantForm } from '../components/ReviewTheApplicantForm';

const Company = () => {
    return (
        <main>
            <GeneralCompanyRate />
            <CompanyTabs />
            <Reviews />
            <ReviewTheApplicantForm />
        </main>
    );
};
export default Company;
