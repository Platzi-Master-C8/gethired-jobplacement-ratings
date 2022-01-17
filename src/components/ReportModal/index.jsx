import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Modal, Select, Button, MenuItem, TextField, Typography, InputLabel, FormControl } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';

const ReportModalStyle = {
    p: 4,
    top: '50%',
    left: '50%',
    // width: 400,
    boxShadow: 24,
    minWidth: '320px',
    borderRadius: '6px',
    position: 'absolute',
    border: '1px solid #555BFF',
    bgcolor: 'background.paper',
    transform: 'translate(-50%, -50%)',
};

const FormModalStyle = {
    gap: '20px',
    display: 'grid',
};

export const ReportModal = ({ open, handleClose }) => {
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    // const [error, setError] = useState(false); // Error with fetch
    const [loading, setLoading] = useState(false);
    const [reasonInput, setReasonInput] = useState('');

    const handleChange = (event) => {
        setReason(event.target.value);
    };

    // TODO: Connect to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            handleClose();
        }, 2500);
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={ReportModalStyle}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button title="Close modal" onClick={handleClose} aria-label="Close modal">
                        <CloseIcon />
                    </Button>
                </Box>
                <Box mb="20px">
                    <Typography variant="h6" component="h6">
                        Help us understand what is happening
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit} style={FormModalStyle}>
                    <FormControl fullWidth>
                        <InputLabel>Select a reason</InputLabel>
                        <Select value={reason} label="Select a reason" onChange={handleChange}>
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="value1">Suspicious, spam or fake</MenuItem>
                            <MenuItem value="value2">Harassment or incitement to hatred</MenuItem>
                            <MenuItem value="value3">Violence or physical assault</MenuItem>
                            <MenuItem value="value4">Adult content</MenuItem>
                            <MenuItem value="value5">Defamation or infringement of intellectual property</MenuItem>
                            <MenuItem value="value6">None of the reasons for reporting apply</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ display: 'grid', gap: '8px' }}>
                        <Typography>What was the issue with this review?</Typography>
                        <TextField
                            rows={5}
                            fullWidth
                            multiline
                            id="User-reason"
                            variant="outlined"
                            value={reasonInput}
                            label="Describe the issue"
                            onChange={(e) => setReasonInput(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: 'grid', gap: '8px' }}>
                        <Typography>Your email address *</Typography>
                        <TextField
                            fullWidth
                            type="email"
                            label="Email"
                            value={email}
                            id="User-email"
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    {loading && (
                        <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
                            Fetch data
                        </LoadingButton>
                    )}
                    {!loading && (
                        <Button type="submit" variant="contained" fullWidth size="large">
                            Submit
                        </Button>
                    )}
                </form>
            </Box>
        </Modal>
    );
};

ReportModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default ReportModal;