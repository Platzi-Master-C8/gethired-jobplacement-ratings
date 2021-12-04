import React from 'react';

import { GeneralCompanyRate } from '../components/GeneralCompanyRate';
import CompanyTabs from '../components/CompanyTabs';
import { Reviews } from '../components/Reviews';

const Company = () => {
    return (
        <main>
            <GeneralCompanyRate />
            <CompanyTabs />
            <Reviews />
        </main>
    );
};
export default Company;
