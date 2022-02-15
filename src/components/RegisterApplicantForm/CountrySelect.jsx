import React, { useState, useEffect } from 'react';
import { Box, TextField, Autocomplete } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

import api from '../../services/api';

const StyledAutocomplete = styled(Autocomplete)`
    width: 90%;

    .MuiFilledInput-root {
        padding-top: 8px;
    }
`;

export const CountrySelect = ({ applicantData, setApplicantData }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const data = await api.applicantRegistration.mockDataCountries();

            if (active) {
                setOptions([...data]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const handleChage = (e, value) => {
        setApplicantData({ ...applicantData, country: value });
    };

    return (
        <StyledAutocomplete
            id="country-select-demo"
            options={options}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            value={applicantData?.country || ' '}
            loading={loading}
            autoHighlight
            isOptionEqualToValue={(option, value) => option.title === value.title}
            getOptionLabel={(option) => option.label || ' '}
            onChange={handleChage}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    variant="filled"
                    {...params}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                />
            )}
        />
    );
};

CountrySelect.propTypes = {
    setApplicantData: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    applicantData: PropTypes.object.isRequired,
};
