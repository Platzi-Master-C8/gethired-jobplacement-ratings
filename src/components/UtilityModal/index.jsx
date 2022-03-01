import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Modal, Typography } from '@mui/material';

const ReportModalStyle = {
    p: 4,
    top: '50%',
    left: '50%',
    gap: '25px',
    // width: 400,
    boxShadow: 24,
    display: 'grid',
    minWidth: '320px',
    borderRadius: '6px',
    position: 'absolute',
    justifyContent: 'center',
    border: '1px solid #555BFF',
    bgcolor: 'background.paper',
    transform: 'translate(-50%, -50%)',
};

export const UtilityModal = ({ open, handleClose, message }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={ReportModalStyle}>
                <Typography variant="h6" component="p">
                    {message}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleClose}>
                    Return
                </Button>
            </Box>
        </Modal>
    );
};

UtilityModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
};

export default UtilityModal;
