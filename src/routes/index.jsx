import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Company from 'Pages/Company';
import NotFound from 'Pages/NotFound';

const Routes = () => (
    <BrowserRouter basename="/gethired-jobplacement-ratings">
        <Switch>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Company />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
