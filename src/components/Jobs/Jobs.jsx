import React from 'react';
import { ReviewTheApplicantForm } from '../ReviewTheApplicantForm';
import { ReviewApplicationProcessForm } from '../ReviewApplicationProcess';
import { RegisterApplicantForm } from '../RegisterApplicantForm';

const Jobs = () => (
    <div>
        <ReviewTheApplicantForm company_id={1} applicant_id={1} />
        <ReviewApplicationProcessForm company_id={1} applicant_id={1} />
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '3rem 0' }}>
            <RegisterApplicantForm />
        </div>
    </div>
);

export default Jobs;
