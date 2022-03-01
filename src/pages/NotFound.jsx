import React from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';

const NotFound = ({ noData }) => (
    <div>
        <h3>{noData ? 'No Data' : 'Not Found Page'}</h3>
        <a href="https://get-hired.work/">Go home</a>
        <Link href={process.env.ENTERPRISES_URL}>Go home</Link>
    </div>
);

NotFound.propTypes = {
    noData: PropTypes.bool,
};

NotFound.defaultProps = {
    noData: false,
};

export default NotFound;
