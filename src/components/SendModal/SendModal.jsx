import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const boxStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    height: '20%',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
};

const SendModal = ({ open, loading, error, handleClose }) => {
    if (loading)
        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="send-modal-title"
                aria-describedby="send-modal-description"
            >
                <Box sx={boxStyles}>
                    <Grid item>
                        <Button variant="text" onClick={handleClose}>
                            <CloseIcon />
                        </Button>
                    </Grid>
                    <HourglassEmptyIcon fontSize="large" />
                </Box>
            </Modal>
        );

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="send-modal-title"
            aria-describedby="send-modal-description"
        >
            <Box sx={boxStyles}>
                <Grid item>
                    <Button variant="text" onClick={handleClose}>
                        <CloseIcon />
                    </Button>
                </Grid>
                {error ? <ErrorOutlineIcon fontSize="large" /> : <CheckCircleOutlineIcon fontSize="large" />}
            </Box>
        </Modal>
    );
};

SendModal.propTypes = {
    open: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default SendModal;
