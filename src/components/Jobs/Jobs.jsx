import React from 'react';
import { ReviewTheApplicantForm } from '../ReviewTheApplicantForm';
import { ReviewApplicationProcessForm } from '../ReviewApplicationProcess';

const Jobs = () => (
    <div>
        <ReviewTheApplicantForm company_id={1} applicant_id={0} />
        <ReviewApplicationProcessForm company_id={1} applicant_id={0} />
    </div>
);

export default Jobs;
