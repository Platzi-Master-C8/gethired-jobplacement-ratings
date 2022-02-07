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

    .css-10botns-MuiInputBase-input-MuiFilledInput-input {
        padding-top: 13px;
    }
`;

const StyledLabel = styled(InputLabel)`
    font-family: Montserrat;
    font-weight: 300;
    font-size: 20px;
    color: black;
`;

const StyledTypography = styled(Typography)`
    font-family: Montserrat;
`;

const ButtonStyles = {
    backgroundColor: '#F8F8F8',
    border: '1px solid #555BFF',
    color: '#373F41',
    '&:hover': {
        border: '1px solid #555BFF',
    },
};

const RegisterApplicantForm = () => {
    return (
        <Box component="form" sx={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;', width: '37rem' }}>
            <Grid container>
                <Grid item md={12} margin="1.5rem 7% 1rem">
                    <StyledTypography fontSize={21} fontWeight="600" lineHeight={2}>
                        Job title
                    </StyledTypography>
                    <StyledTypography fontSize={18} fontWeight="400">
                        Company name - Location
                    </StyledTypography>
                </Grid>
                <Grid item md={12}>
                    <Divider variant="middle" />
                </Grid>
                <Grid item md={12} margin="15px 0 10px 7%">
                    <StyledTypography fontSize={16} fontWeight="300">
                        * These fields are required
                    </StyledTypography>
                </Grid>
            </Grid>
            <Box
                sx={{
                    width: '93%',
                    margin: '10px auto',
                    padding: '20px 0',
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(173, 173, 173) 0px 0px 0px 1px inset;',
                }}
            >
                <Grid container marginLeft="0.1rem" marginBottom="2rem" spacing={3}>
                    <Grid item md={12}>
                        <StyledLabel htmlFor="input-1" shrink>
                            Name *
                        </StyledLabel>
                        <StyledFormControl required>
                            <FilledInput id="input-1" />
                        </StyledFormControl>
                    </Grid>
                    <Grid item md={12}>
                        <StyledLabel htmlFor="input-2" shrink>
                            Email *
                        </StyledLabel>
                        <StyledFormControl required>
                            <FilledInput id="input-2" />
                        </StyledFormControl>
                    </Grid>
                    <Grid item md={12}>
                        <StyledLabel htmlFor="input-3" shrink>
                            Phone Number *
                        </StyledLabel>
                        <StyledFormControl required>
                            <FilledInput id="input-3" />
                        </StyledFormControl>
                    </Grid>
                </Grid>
                <Divider
                    sx={{
                        margin: '1rem 0 1.5rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.1)',
                    }}
                />
                <Grid container marginLeft="0.1rem" marginBottom="1rem" spacing={3}>
                    <Grid item md={12}>
                        <StyledTypography fontSize={16} fontWeight="700" lineHeight={2}>
                            Relevant experience
                        </StyledTypography>
                    </Grid>
                    <Grid item md={12}>
                        <StyledLabel htmlFor="input-4" shrink>
                            Job Title
                        </StyledLabel>
                        <StyledFormControl>
                            <FilledInput id="input-4" />
                        </StyledFormControl>
                    </Grid>
                    <Grid item md={12}>
                        <StyledLabel htmlFor="input-5" shrink>
                            Company
                        </StyledLabel>
                        <StyledFormControl>
                            <FilledInput id="input-5" />
                        </StyledFormControl>
                    </Grid>
                </Grid>
            </Box>
            <Grid container padding="1rem 0 2rem 0">
                <Grid item md={12} marginLeft="1rem">
                    <StyledLabel htmlFor="button-file" shrink>
                        Resume *
                    </StyledLabel>
                    <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button variant="outlined" component="label" sx={ButtonStyles}>
                            Choose File
                            <Input id="button-file" type="file" sx={{ display: 'none' }} />
                        </Button>
                        <StyledTypography fontSize={16} fontWeight="300" marginLeft={3}>
                            No file chosen
                        </StyledTypography>
                    </Grid>
                </Grid>
                <Grid item md={12} margin="1rem">
                    <InputLabel htmlFor="icon-button-file" style={{ display: 'flex', alignItems: 'center' }}>
                        <Input id="icon-button-file" type="file" sx={{ display: 'none' }} />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <AttachFileIcon sx={{ transform: 'rotate(45deg)', color: '#555BFF' }} />
                        </IconButton>
                        <StyledTypography
                            fontSize={16}
                            fontWeight="300"
                            sx={{ color: '#555BFF', '&:hover': { cursor: 'pointer' } }}
                        >
                            Attach aditional documents
                        </StyledTypography>
                    </InputLabel>
                </Grid>
                <Grid item md={12}>
                    <Divider variant="middle" />
                </Grid>
                <Grid item md={12} marginLeft="1rem">
                    <StyledTypography lineHeight={4} fontSize={12} fontWeight="300">
                        By pressing continue you agree with our terms, conditions and personal data policy
                    </StyledTypography>
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
