import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Fade,
    Modal,
    Select,
    Button,
    MenuItem,
    TextField,
    Typography,
    InputLabel,
    FormControl,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
import api from '../../services/api';

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

export const ReportModal = ({ open, handleClose, company_id }) => {
    const [form, setForm] = useState({
        email: '',
        reason: '',
        description: '',
    });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // TODO: Connect to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        api.companyReports
            .sendReport(company_id, form)
            .then((res) => {
                if (res && res.ok) {
                    setError(false);
                    handleClose(true);
                } else {
                    setError(true);
                }
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            });
        setTimeout(() => {
            setError(false);
        }, 4000);
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
                    <Fade in={error} style={{ height: error ? 'initial' : 0 }}>
                        <Typography variant="body1" component="p" color="error">
                            An error occurred, please try again
                        </Typography>
                    </Fade>
                </Box>
                <form onSubmit={handleSubmit} style={FormModalStyle}>
                    <FormControl fullWidth>
                        <InputLabel>Select a reason</InputLabel>
                        <Select name="reason" value={form.reason} onChange={handleInput} label="Select a reason">
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
                            name="description"
                            variant="outlined"
                            onChange={handleInput}
                            value={form.description}
                            label="Describe the issue"
                        />
                    </Box>
                    <Box sx={{ display: 'grid', gap: '8px' }}>
                        <Typography>Your email address *</Typography>
                        <TextField
                            fullWidth
                            type="email"
                            name="email"
                            label="Email"
                            id="User-email"
                            variant="outlined"
                            value={form.email}
                            onChange={handleInput}
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
    company_id: PropTypes.string.isRequired,
};

export default ReportModal;
