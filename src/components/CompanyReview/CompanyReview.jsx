import React from 'react';
import PropTypes from 'prop-types';
import './CompanyReview.scss';

const CompanyReview = ({ ind, title }) => (
    <div className="company-review" key={`CompanyReview-${ind}`}>
        {title}
    </div>
);

CompanyReview.propTypes = {
    ind: PropTypes.number,
    title: PropTypes.string,
};

CompanyReview.defaultProps = {
    ind: 0,
    title: 'Company Review',
};

export default CompanyReview;
