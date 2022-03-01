import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';

import NotFound from 'Pages/NotFound';
import { GeneralCompanyRate } from '../components/GeneralCompanyRate';
import CompanyTabs from '../components/CompanyTabs';

import api from '../services/api';

// Tabs
import { Reviews } from '../components/Reviews';
import { Overview } from '../components/Overview';
// import { Jobs } from '../components/Jobs';

const Company = () => {
    const { companyId } = useParams();

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        api.companyRaiting
            .getData(companyId)
            .then((response) => response.json())
            .then((result) => {
                setIsLoaded(true);
                setData(result.data);
            })
            .catch(() => {
                setIsLoaded(true);
                setError(true);
            });
    }, [companyId]);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return error || !data?.company_information ? (
        <NotFound noData />
    ) : (
        <Container>
            <GeneralCompanyRate data={data} />
            <CompanyTabs
                tabsOptions={[
                    { tabKey: 'Overview', tabContent: <Overview info={data} /> },
                    { tabKey: 'Reviews', tabContent: <Reviews info={data} /> },
                    // { tabKey: 'Jobs', tabContent: <Jobs /> },
                ]}
            />
        </Container>
    );
};
export default Company;
