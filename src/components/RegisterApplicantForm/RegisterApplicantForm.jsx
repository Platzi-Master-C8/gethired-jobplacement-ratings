import React from 'react';
import {
    Grid,
    Typography,
    Divider,
    Box,
    FormControl,
    FilledInput,
    InputLabel,
    Input,
    Button,
    IconButton,
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { styled } from '@mui/material/styles';

const StyledFormControl = styled(FormControl)`
    width: 90%;
`;

const RegisterApplicantForm = () => {
    return (
        <Box component="form" sx={{ boxShadow: 5, width: '33rem' }}>
            <Grid container>
                <Grid item md={12} margin="10px 5%">
                    <Typography variant="h1" sx={{ fontSize: 20, lineHeight: 2 }}>
                        Job title
                    </Typography>
                    <Typography>Company name - Location</Typography>
                </Grid>
                <Grid item md={12}>
                    <Divider variant="middle" />
                </Grid>
                <Grid item md={12} margin="15px 0 10px 5%">
                    <Typography>*These fields are required</Typography>
                </Grid>
            </Grid>
            <Box sx={{ width: '90%', margin: '10px auto', boxShadow: 2, padding: '20px 0' }}>
                <Grid container marginLeft="10px" spacing={2}>
                    <Grid item md={12}>
                        <InputLabel htmlFor="input-1" shrink>
                            Name *
                        </InputLabel>
                        <StyledFormControl>
                            <FilledInput id="input-1" />
                        </StyledFormControl>
                    </Grid>
                    <Grid item md={12}>
                        <InputLabel htmlFor="input-1" shrink>
                            Email *
                        </InputLabel>
                        <StyledFormControl>
                            <FilledInput id="input-1" />
                        </StyledFormControl>
                    </Grid>
                    <Grid item md={12}>
                        <InputLabel htmlFor="input-1" shrink>
                            Phone Number *
                        </InputLabel>
                        <StyledFormControl>
                            <FilledInput id="input-1" />
                        </StyledFormControl>
                    </Grid>
                </Grid>
                <Divider sx={{ margin: '15px 0' }} />
                <Grid container marginLeft="10px" spacing={2}>
                    <Grid item md={12}>
                        <Typography>Relevant experience</Typography>
                    </Grid>
                    <Grid item md={12}>
                        <InputLabel htmlFor="input-1" shrink>
                            Job Title
                        </InputLabel>
                        <StyledFormControl>
                            <FilledInput id="input-1" />
                        </StyledFormControl>
                    </Grid>
                    <Grid item md={12}>
                        <InputLabel htmlFor="input-1" shrink>
                            Company
                        </InputLabel>
                        <StyledFormControl>
                            <FilledInput id="input-1" />
                        </StyledFormControl>
                    </Grid>
                </Grid>
            </Box>
            <Grid container padding="1rem 0 2rem 0">
                <Grid item md={12} marginLeft="1rem">
                    <InputLabel htmlFor="button-file" shrink>
                        Resume *
                    </InputLabel>
                    <Button variant="outlined" component="label">
                        Upload File
                        <Input id="button-file" type="file" sx={{ display: 'none' }} />
                    </Button>
                </Grid>
                <Grid item md={12} margin="1rem">
                    <InputLabel htmlFor="icon-button-file" style={{ display: 'flex', alignItems: 'center' }}>
                        <Input id="icon-button-file" type="file" sx={{ display: 'none' }} />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <AttachFileIcon sx={{ transform: 'rotate(45deg)' }} />
                        </IconButton>
                        <Typography>Attach aditional documents</Typography>
                    </InputLabel>
                </Grid>
                <Grid item md={12}>
                    <Divider variant="middle" />
                </Grid>
                <Grid item md={12} marginLeft="1rem">
                    <Typography variant="caption" lineHeight={4}>
                        By pressing continue you agree with our terms, conditions and personal data policy{' '}
                    </Typography>
                    <Grid container>
                        <Button
                            variant="contained"
                            type="submit"
                            size="medium"
                            sx={{ marginRight: '1rem', width: '6rem' }}
                        >
                            Continue
                        </Button>
                        <Button variant="outlined" size="medium" sx={{ width: '6rem' }}>
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RegisterApplicantForm;
