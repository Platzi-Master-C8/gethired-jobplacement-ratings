import React from 'react';
import Company from 'Pages/Company';
import { ThemeProvider } from '@mui/material';
import { THEME } from 'Constants/theme.constant';
import 'Styles/style.scss';

const App = () => (
    <React.StrictMode>
        <ThemeProvider theme={THEME}>
            <Company />
        </ThemeProvider>
    </React.StrictMode>
);

export default App;
