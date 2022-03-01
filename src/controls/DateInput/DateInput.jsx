import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DatePicker from '@mui/lab/DatePicker';

const DateInput = ({ value, onChange, label, name, disabled, withTime, justTime, ...props }) => {
    const handleChange = (val) => {
        const e = { target: { value: moment(val).format('YYYY-MM-DD'), name } };
        onChange(e);
    };

    if (justTime)
        return (
            <LocalizationProvider dateAdapter={DateAdapter}>
                <TimePicker
                    disableFuture
                    id={name}
                    name={name}
                    label={label}
                    value={value}
                    disabled={disabled}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} />}
                    {...props}
                />
            </LocalizationProvider>
        );

    return (
        <LocalizationProvider dateAdapter={DateAdapter}>
            {withTime ? (
                <DateTimePicker
                    disableFuture
                    id={name}
                    name={name}
                    label={label}
                    value={value}
                    disabled={disabled}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} />}
                    {...props}
                />
            ) : (
                <DatePicker
                    disableFuture
                    id={name}
                    name={name}
                    label={label}
                    value={value}
                    disabled={disabled}
                    onChange={handleChange}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} />}
                    {...props}
                />
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
