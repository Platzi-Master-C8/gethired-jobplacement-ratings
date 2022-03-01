import React from 'react';
import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';

import { Home } from '@master-c8/icons';
import { Header } from '@master-c8/commons';

const Layout = ({ children }) => {
    return (
        <div>
            <Header isLogged>
                <MenuList sx={{ display: { sm: 'initial', md: 'flex' } }}>
                    <MenuItem>
                        <Link
                            sx={{
                                flexDirection: { sm: 'row', md: 'column' },
                                alignItems: 'center',
                                gap: '5px',
                                display: 'flex',
                                textDecoration: 'none',
                            }}
                            href={process.env.ENTERPRISES_URL}
                        >
                            <ListItemIcon sx={{ justifyContent: 'center' }}>
                                <Home color="secondary" />
                            </ListItemIcon>
                            <Typography color="secondary" sx={{ fontSize: { sm: '16px', md: '13px' } }}>
                                Home
                            </Typography>
                        </Link>
                    </MenuItem>
                </MenuList>
            </Header>
            {children}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;
