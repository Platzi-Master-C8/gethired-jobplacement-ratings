import React, { useState } from 'react';

import { Header } from '@master-c8/commons';
import { useMediaQuery, useTheme } from '@mui/material';

import { goToEnterprise } from '../../utils';

import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';

export const HeaderEnterprise = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Header
            className="header-menu"
            isLogged={false}
            onClickLogin={() => goToEnterprise()}
            onClickSignup={() => goToEnterprise()}
        >
            {isMatch ? <HeaderMobile openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} /> : <HeaderDesktop />}
        </Header>
    );
};
