import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@mui/material/Avatar';
import { Box, MenuList, MenuItem, ListItemIcon, ListItemText, Drawer, IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';

import { Home, BriefCase, Blog, UserGroup, Menu } from '@master-c8/icons';

import { AuthenticationButton } from 'Components/AuthButtons';
import { LinkStyled } from './styles';

export const HeaderMobile = ({ openDrawer, setOpenDrawer }) => {
    return (
        <Box>
            <Drawer anchor="right" onClose={() => setOpenDrawer(false)} open={openDrawer}>
                <MenuList sx={{ display: 'block' }}>
                    <MenuItem>
                        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                            <LinkStyled to="/">
                                <ListItemIcon>
                                    <Home sx={{ color: grey[900] }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'black' }}>Home</ListItemText>
                            </LinkStyled>
                        </IconButton>
                    </MenuItem>
                    <MenuItem>
                        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                            <LinkStyled to="/vacancies">
                                <ListItemIcon>
                                    <BriefCase sx={{ color: grey[900] }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'black' }}>Vacancies</ListItemText>
                            </LinkStyled>
                        </IconButton>
                    </MenuItem>
                    <MenuItem>
                        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                            <LinkStyled to="/interviews">
                                <ListItemIcon>
                                    <UserGroup sx={{ color: grey[900] }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'black' }}>Interviews</ListItemText>
                            </LinkStyled>
                        </IconButton>
                    </MenuItem>
                    <MenuItem>
                        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                            <LinkStyled to="/postulations">
                                <ListItemIcon>
                                    <Blog sx={{ color: grey[900] }} />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'black' }}>Postulations</ListItemText>
                            </LinkStyled>
                        </IconButton>
                    </MenuItem>
                    <MenuItem sx={{ justifyContent: 'center' }}>
                        <ListItemIcon sx={{ color: 'black' }} size="large">
                            <Avatar sx={{ bgcolor: '#AE4EFF', width: 45, height: 45 }} alt="Profile" />
                        </ListItemIcon>
                    </MenuItem>
                    <MenuItem sx={{ justifyContent: 'center' }}>
                        <AuthenticationButton size="large" sx={{ width: '60%' }} />
                    </MenuItem>
                </MenuList>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu />
            </IconButton>
        </Box>
    );
};

HeaderMobile.propTypes = {
    openDrawer: PropTypes.bool.isRequired,
    setOpenDrawer: PropTypes.func.isRequired,
};
