import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, CircularProgress, Grid, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
    borderRadius: '12px',
    overflow: 'auto',
};

const closeButton = {
    display: 'flex',
    justifyContent: 'flex-end',
};

const SendModal = ({ open, loading, error, handleClose }) => {
    if (loading) {
        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="send-modal-title"
                aria-describedby="send-modal-description"
            >
                <Box sx={boxStyles}>
                    <Grid item sx={closeButton}>
                        <Button variant="text" onClick={handleClose}>
                            <CloseIcon />
                        </Button>
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ padding: '20px' }}
                    >
                        <Grid item>
                            <Typography variant="subtitle1">Send applicant review</Typography>
                        </Grid>
                        <Grid item>
                            <CircularProgress color="secondary" />
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        );
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="send-modal-title"
            aria-describedby="send-modal-description"
        >
            <Box sx={boxStyles}>
                <Grid item sx={closeButton}>
                    <Button variant="text" onClick={handleClose}>
                        <CloseIcon />
                    </Button>
                </Grid>
                {error && (
                    <Grid
                        container
                        spacing={2}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ padding: '20px' }}
                    >
                        <Grid container item spacing={1}>
                            <Grid item>
                                <Typography variant="subtitle1">¡Error!: Try again</Typography>
                            </Grid>
                            <Grid item>
                                <ErrorOutlineIcon color="error" />
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Typography variant="subtitle2">There was an error when sending the review</Typography>
                        </Grid>
                    </Grid>
                )}
                {!error && (
                    <Grid
                        container
                        spacing={2}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ padding: '20px' }}
                    >
                        <Grid container item spacing={1}>
                            <Grid item>
                                <Typography variant="subtitle1">Submitted successfully</Typography>
                            </Grid>
                            <Grid item>
                                <CheckCircleOutlineIcon color="success" />
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Typography variant="subtitle2">
                                The review will soon be able in the company page
                            </Typography>
                        </Grid>
                    </Grid>
                )}
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
