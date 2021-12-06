import React, { useState } from 'react';
import {
    Button,
    FormControl,
    Grid,
    Modal,
    OutlinedInput,
    Typography,
    RadioGroup,
    Radio,
    FormControlLabel,
    Select,
    MenuItem,
} from '@mui/material';
import { Box } from '@mui/system';

const boxStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '45%',
    height: '75%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
};

const ReviewApplicationProcess = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Grid>
                <Button onClick={handleOpen}>Review your application process</Button>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form>
                    <Box sx={boxStyles}>
                        <Typography variant="h1" align="center" sx={{ fontSize: 28 }}>
                            Review your Application Process
                        </Typography>
                        <Grid container marginTop={3}>
                            <Grid item md={6}>
                                <Grid item>
                                    <Typography variant="subtitle1" sx={{ fontSize: '16px', margin: '10px 0' }}>
                                        Job title
                                    </Typography>
                                    <FormControl sx={{ width: '100%' }}>
                                        <OutlinedInput sx={{ width: '100%' }} required />
                                    </FormControl>
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                        How would you rate the salary?
                                    </Typography>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup id="salary_rating" name="salary_rating" row>
                                            <FormControlLabel value={0} control={<Radio />} label="High" />
                                            <FormControlLabel value={1} control={<Radio />} label="Average" />
                                            <FormControlLabel value={2} control={<Radio />} label="Low" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                        Does the job allows you to work from home?
                                    </Typography>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup id="work_from_home" name="work_from_home" row>
                                            <FormControlLabel value={0} control={<Radio />} label="Yes" />
                                            <FormControlLabel value={1} control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                        How was the response time?
                                    </Typography>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup id="response_time_rating" name="response_time_rating" row>
                                            <FormControlLabel value={0} control={<Radio />} label="Good" />
                                            <FormControlLabel value={1} control={<Radio />} label="Regular" />
                                            <FormControlLabel value={2} control={<Radio />} label="Bad" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                        How would you rate the job description?
                                    </Typography>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup id="job_description_rating" name="job_description_rating" row>
                                            <FormControlLabel value={0} control={<Radio />} label="High" />
                                            <FormControlLabel value={1} control={<Radio />} label="Average" />
                                            <FormControlLabel value={2} control={<Radio />} label="Low" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid>
                                    <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                        Is the company legally well reagulated?
                                    </Typography>
                                    <FormControl component="fieldset" required>
                                        <RadioGroup id="is_company_reagulated" name="is_company_reagulated" row>
                                            <FormControlLabel value={0} control={<Radio />} label="Yes" />
                                            <FormControlLabel value={1} control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item md={6} sx={{ paddingLeft: '30px' }}>
                                <Typography variant="subtitle1" sx={{ fontSize: 16, margin: '10px 0' }}>
                                    What part of the process would you like to improve?
                                </Typography>
                                <FormControl sx={{ width: '90%' }}>
                                    <OutlinedInput multiline rows={6} sx={{ width: '100%' }} />
                                </FormControl>
                            </Grid>
                            <Grid item md={12}>
                                <Typography variant="subtitle1" sx={{ fontSize: 16, marginBottom: '15px' }}>
                                    How long it took from the begining to the end of the process?
                                </Typography>
                                <FormControl sx={{ width: '20%', marginRight: '10px' }}>
                                    <OutlinedInput type="number" />
                                </FormControl>
                                <FormControl sx={{ width: '20%' }} required>
                                    <Select
                                        labelId="finish_time_rating"
                                        id="finish_time_rating"
                                        name="finish_time_rating"
                                        value={1}
                                    >
                                        <MenuItem value={0}>Year(s)</MenuItem>
                                        <MenuItem value={1}>Month(s)</MenuItem>
                                        <MenuItem value={2}>Day(s)</MenuItem>
                                        <MenuItem value={3}>Hour(s)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ alignItems: 'center', justifyContent: 'center', marginTop: 4 }}>
                            <Grid item md={2} onClick={handleClose}>
                                <Button variant="outlined">Cancel</Button>
                            </Grid>
                            <Grid item md={2}>
                                <Button variant="outlined" type="submit">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Modal>
        </div>
    );
};

export default ReviewApplicationProcess;
