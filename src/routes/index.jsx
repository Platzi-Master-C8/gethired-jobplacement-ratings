import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Company from 'Pages/Company';
import NotFound from 'Pages/NotFound';

import Layout from 'Components/Layout';

const Routes = () => (
    <BrowserRouter basename="/gethired-jobplacement-ratings">
        <Layout>
            <Switch>
                <Route path="/" element={<Company />} />
                <Route path="*" element={<NotFound />} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default Routes;
