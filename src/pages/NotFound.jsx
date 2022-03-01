import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ noData }) => (
    <div>
        <h3>{noData ? 'No Data' : 'Not Found Page'}</h3>
        <a href="https://platzi-master-c8.github.io/">Go home</a>
    </div>
);

NotFound.propTypes = {
    noData: PropTypes.bool,
};

NotFound.defaultProps = {
    noData: false,
};

export default NotFound;
