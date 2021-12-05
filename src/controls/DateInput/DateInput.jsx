import React, { Fragment } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

const ShowDesktop = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: contents;
    }
`;

const ShowMobile = styled.div`
    display: contents;
    @media (min-width: 768px) {
        display: none;
    }
`;

const DateInput = ({ value, onChange, label, name, disabled, withTime, justTime }) => {
    const handleChange = (val) => {
        const e = { target: { value: moment(val).toISOString(), name } };
        onChange(e);
    };

    if (justTime)
        return (
            <LocalizationProvider dateAdapter={DateAdapter}>
                <TimePicker
                    id={name}
                    name={name}
                    label={label}
                    value={value}
                    disabled={disabled}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        );

    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
            {withTime ? (
                <DateTimePicker
                    id={name}
                    name={name}
                    label={label}
                    value={value}
                    disabled={disabled}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} />}
                />
            ) : (
                <Fragment>
                    <ShowDesktop>
                        <DesktopDatePicker
                            id={name}
                            name={name}
                            label={label}
                            value={value}
                            disabled={disabled}
                            onChange={handleChange}
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </ShowDesktop>
                    <ShowMobile>
                        <MobileDatePicker
                            id={name}
                            name={name}
                            label={label}
                            value={value}
                            disabled={disabled}
                            onChange={handleChange}
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </ShowMobile>
                </Fragment>
            )}
        </LocalizationProvider>
    );
};

DateInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    withTime: PropTypes.bool,
    justTime: PropTypes.bool,
};

DateInput.defaultProps = {
    label: '',
    disabled: false,
    withTime: false,
    justTime: false,
};

export default DateInput;
