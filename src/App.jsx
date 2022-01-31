import React from 'react';
import { ThemeProvider } from '@master-c8/theme';
import Routes from 'Routes';
import MediaQueyProvider from './context/MediaQueryContext';

import 'Styles/style.scss';

const App = () => (
    <React.StrictMode>
        <ThemeProvider>
            <MediaQueyProvider>
                <Routes />
            </MediaQueyProvider>
        </ThemeProvider>
    </React.StrictMode>
);

export default App;
