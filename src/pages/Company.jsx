import React from 'react';
import { GeneralCompanyRate } from '../components/GeneralCompanyRate';
import { CompanyReview } from '../components/CompanyReview';

const Company = () => {
    const Reviews = ['Good', 'Regular', 'Bad'];

    return (
        <main>
            <GeneralCompanyRate />
            <div className="companyTabs">
                <a href="https://www.google.com/">Overview</a>
                <a href="https://www.google.com/">Reviews</a>
                <a href="https://www.google.com/">Jobs</a>
                <a href="https://www.google.com/">Write a review</a>
            </div>
            <section className="company-review">
                {Reviews.map((review, i) => (
                    <CompanyReview title={review} ind={i} />
                ))}
            </section>
        </main>
    );
};
export default Company;
