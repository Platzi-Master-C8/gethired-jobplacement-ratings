import React from 'react';

import Button from '@mui/material/Button';

import { goToEnterprise } from '../../utils';

export const AuthenticationButton = () => {
    return (
        <Button variant="contained" type="button" onClick={() => goToEnterprise()}>
            Log in
        </Button>
    );
};

export const SignupButton = () => {
    return (
        <Button variant="contained" type="button" onClick={() => goToEnterprise()}>
            Sign up
        </Button>
    );
};
