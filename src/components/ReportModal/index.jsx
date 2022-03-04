import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
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
import { UtilityModal } from '../UtilityModal';
import config from '../../config';

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

const initialState = {
    email: '',
    reason: '',
    description: '',
};

const LengthMessage = styled(Box)`
    width: 90%;
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ReportModal = ({ open, handleClose, review_id, reasons }) => {
    const [form, setForm] = useState(initialState);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState(false);
    const [lengthError, setLengthError] = useState('');

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleReportModal = () => {
        if (error) {
            setError(false);
            return;
        }
        setError(false);
        setSuccess(false);
        handleClose();
    };

    const validateForm = () => {
        if (form.description.length < 10) {
            setLengthError('Field should be greater than 10');
            setLoading(false);
            return false;
        }
        if (form.description.length > 70) {
            setLengthError('Field should be less than 70');
            setLoading(false);
            return false;
        }
        if (!form.reason || !form.email || !form.description) {
            setFormError(true);
            setLoading(false);
            return false;
        }
        setFormError(false);
        setLengthError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!validateForm()) return;
        const url = `${config.api}company-evaluation/${review_id}/complaints`;
        const body = {
            email: form.email,
            problem_description: form.description,
            reporting_reason_type_id: form.reason,
        };
        fetch(url, {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.id) setSuccess(true);
                else setError(true);
                setForm(initialState);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    };

    return (
        <Modal open={open} onClose={handleReportModal}>
            <Box sx={ReportModalStyle}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button title="Close modal" onClick={handleReportModal} aria-label="Close modal">
                        <CloseIcon />
                    </Button>
                </Box>
                <Box mb="20px">
                    <Typography variant="h6" component="h6">
                        Help us understand what is happening
                    </Typography>
                    <Fade in={formError} style={{ height: formError ? 'initial' : 0 }}>
                        <Typography variant="body1" component="p" color="error">
                            Complete the form to continue
                        </Typography>
                    </Fade>
                </Box>
                <form onSubmit={handleSubmit} style={FormModalStyle}>
                    <FormControl fullWidth>
                        <InputLabel>Select a reason</InputLabel>
                        <Select
                            name="reason"
                            required
                            value={form.reason}
                            onChange={handleInput}
                            label="Select a reason"
                        >
                            <MenuItem value="">None</MenuItem>
                            {reasons?.map((item) => (
                                <MenuItem key={`Reason-${item.id}`} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Box sx={{ display: 'grid', gap: '8px' }}>
                        <Typography>What was the issue with this review?</Typography>
                        <TextField
                            rows={5}
                            required
                            fullWidth
                            multiline
                            id="User-reason"
                            name="description"
                            variant="outlined"
                            onChange={handleInput}
                            value={form.description}
                            label="Describe the issue"
                        />
                        <LengthMessage>
                            <Typography variant="caption" sx={{ color: 'rgb(255, 117, 117)' }}>
                                {lengthError || ''}
                            </Typography>
                            <Typography variant="caption">{form?.description?.length || 0}</Typography>
                        </LengthMessage>
                    </Box>
                    <Box sx={{ display: 'grid', gap: '8px' }}>
                        <Typography>Your email address *</Typography>
                        <TextField
                            required
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
                <UtilityModal
                    open={success || error}
                    handleClose={handleReportModal}
                    message={
                        success
                            ? 'The report was sent correctly, thank you for your time'
                            : 'An error has occurred, please try again'
                    }
                />
            </Box>
        </Modal>
    );
};

ReportModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    review_id: PropTypes.number.isRequired,
    reasons: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default ReportModal;
