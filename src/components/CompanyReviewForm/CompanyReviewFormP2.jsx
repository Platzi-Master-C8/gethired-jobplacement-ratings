import * as React from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    FormControl,
    OutlinedInput,
    Grid,
    Typography,
    FormControlLabel,
    RadioGroup,
    Radio,
    Select,
    MenuItem,
    Checkbox,
} from '@mui/material';

import { DateInput } from '../../controls/DateInput';

const CompanyReviewFormP2 = ({ review, handleInput }) => {
    const handleCheck = (val) => {
        const e = { target: { value: val.target.checked ? 1 : 0, name: 'isStillWorkingHere' } };
        handleInput(e);
    };

    return (
        <Accordion sx={{ boxShadow: 'none', marginTop: '16px' }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="additional-quiestion-content"
                id="additional-quiestion-header"
            >
                <Typography variant="h1" align="center" sx={{ fontSize: 28 }}>
                    Additional Questions (Optional)
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid item md={12} marginBottom={3}>
                    <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                        Job Location
                    </Typography>
                    <FormControl sx={{ width: '100%' }} required>
                        <OutlinedInput
                            id="jobLocation"
                            name="jobLocation"
                            placeholder="Job Location"
                            value={review.jobLocation}
                            onChange={handleInput}
                        />
                    </FormControl>
                </Grid>
                <Grid container marginBottom={2} spacing={2}>
                    <Grid item md={6}>
                        <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                            Start Date
                        </Typography>
                        <FormControl sx={{ width: '100%' }} required>
                            <DateInput
                                id="startDate"
                                name="startDate"
                                value={review.startDate}
                                onChange={handleInput}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                            End Date
                        </Typography>
                        <FormControl sx={{ width: '100%' }} required>
                            <DateInput
                                id="endDate"
                                name="endDate"
                                value={review.endDate}
                                disabled={!!review.isStillWorkingHere}
                                onChange={handleInput}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container marginBottom={3}>
                    <FormControlLabel
                        control={<Checkbox onChange={handleCheck} checked={!!review.isStillWorkingHere} />}
                        label="Is still working here?"
                    />
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Grid item md={12} marginBottom={3}>
                            <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                Whats the salary?
                            </Typography>
                            <FormControl sx={{ width: '40%' }} required>
                                <OutlinedInput
                                    id="salary"
                                    name="salary"
                                    placeholder="$"
                                    value={review.salary}
                                    onChange={handleInput}
                                />
                            </FormControl>
                            <FormControl sx={{ width: '30%' }} required>
                                <OutlinedInput
                                    id="currencyType"
                                    name="currencyType"
                                    placeholder="MXN"
                                    value={review.currencyType}
                                    onChange={handleInput}
                                />
                            </FormControl>
                            <FormControl sx={{ width: '30%' }} required>
                                <Select
                                    labelId="salaryFrequency-label"
                                    id="salaryFrequency"
                                    name="salaryFrequency"
                                    value={review.salaryFrequency}
                                    label="Per"
                                    onChange={handleInput}
                                >
                                    <MenuItem value={0}>Year</MenuItem>
                                    <MenuItem value={1}>Day</MenuItem>
                                    <MenuItem value={2}>Hour</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                Would you recommend working here to a friend?
                            </Typography>
                            <FormControl component="fieldset" required>
                                <RadioGroup
                                    id="recommendedAFriend"
                                    name="recommendedAFriend"
                                    row
                                    value={review.recommendedAFriend}
                                    onChange={handleInput}
                                >
                                    <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                    <FormControlLabel value={0} control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item md={6}>
                        <Grid item md={12} marginBottom={3}>
                            <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                Does the job allows you to work from home?
                            </Typography>
                            <FormControl component="fieldset" required>
                                <RadioGroup
                                    id="allowsRemoteWork"
                                    name="allowsRemoteWork"
                                    row
                                    value={review.allowsRemoteWork}
                                    onChange={handleInput}
                                >
                                    <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                    <FormControlLabel value={0} control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <Typography variant="subtitle1" sx={{ fontSize: 18 }}>
                                Is the company legally regulated?
                            </Typography>
                            <FormControl component="fieldset" required>
                                <RadioGroup
                                    id="isLegallyCompany"
                                    name="isLegallyCompany"
                                    row
                                    value={review.isLegallyCompany}
                                    onChange={handleInput}
                                >
                                    <FormControlLabel value={1} control={<Radio />} label="Yes" />
                                    <FormControlLabel value={0} control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
};

CompanyReviewFormP2.propTypes = {
    review: PropTypes.shape({
        companyId: PropTypes.number.isRequired,
        userId: PropTypes.number.isRequired,
        jobTitle: PropTypes.string.isRequired,
        contentType: PropTypes.string.isRequired,
        careerDevelopmentRating: PropTypes.string.isRequired,
        diversityEqualOpportunityRating: PropTypes.string.isRequired,
        workingEnvironmentRating: PropTypes.string.isRequired,
        salaryRating: PropTypes.string.isRequired,
        jobLocation: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        isStillWorkingHere: PropTypes.oneOf([0, 1]).isRequired,
        salary: PropTypes.number.isRequired,
        currencyType: PropTypes.string.isRequired,
        salaryFrequency: PropTypes.string.isRequired,
        recommendedAFriend: PropTypes.oneOf([0, 1]).isRequired,
        allowsRemoteWork: PropTypes.oneOf([0, 1]).isRequired,
        isLegallyCompany: PropTypes.oneOf([0, 1]).isRequired,
        utilityCounter: PropTypes.number.isRequired,
        nonUtilityCounter: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
    handleInput: PropTypes.func.isRequired,
};

export default CompanyReviewFormP2;
