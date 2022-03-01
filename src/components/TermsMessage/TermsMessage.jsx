import React from 'react';
import { Typography } from '@mui/material';

import { TermsConditiosModal } from '../TermsConditiosModal';
import { PrivacyPolicyModal } from '../PrivacyPolicyModal';

const TermsMessage = () => (
    <Typography variant="caption" sx={{ display: 'flex', flexWrap: 'wrap', wordWrap: 'break-word' }}>
        Al enviar este formulario estas aceptando nuestros <TermsConditiosModal /> y la <PrivacyPolicyModal />
    </Typography>
);

export default TermsMessage;
