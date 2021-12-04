import React from 'react';

import { GeneralCompanyRate } from '../components/GeneralCompanyRate';
import CompanyTabs from '../components/CompanyTabs';

//
import ReviewTheApplicantForm from '../components/ReviewTheApplicantForm/ReviewTheApplicantForm';

const Company = () => {
    return (
        <main>
            <GeneralCompanyRate />
            <CompanyTabs />
            <ReviewTheApplicantForm />
        </main>
    );
};
export default Company;
