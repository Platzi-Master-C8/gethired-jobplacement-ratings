import React from 'react';
import PropTypes from 'prop-types';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarData = (info) => ({
    labels: ['Carrer development', 'Diversity and Equal Opportunity', 'Working Environment', 'Salary'],
    datasets: [
        {
            label: 'March',
            backgroundColor: 'rgba(34, 202, 236, .2)',
            borderColor: 'rgba(34, 202, 236, 1)',
            pointBackgroundColor: 'rgba(34, 202, 236, 1)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(34, 202, 236, 1)',
            data: [
                info.gral_career_development_rating,
                info.gral_diversity_equal_opportunity_rating,
                info.gral_working_environment_rating,
                info.gral_salary_rating,
            ],
        },
    ],
});

const RadarOptions = {
    scales: {
        r: {
            angleLines: {
                display: true,
                color: 'rgba(255, 255, 255, .3)',
                lineWidth: 1,
            },
            ticks: {
                stepSize: 1,
                showLabelBackdrop: false,
                display: false,
            },
            grid: {
                circular: false,
            },
            pointLabels: {
                size: 30,
            },
            min: 0,
            max: 5,
        },
    },
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
        legend: {
            display: false,
        },
    },
};

const RadarChart = ({ info }) => {
    return <Radar data={RadarData(info)} options={RadarOptions} />;
};

RadarChart.propTypes = {
    info: PropTypes.shape({
        company_information: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            website: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            active: PropTypes.bool.isRequired,
        }).isRequired,
        company_rating: PropTypes.number.isRequired,
        total_reviews: PropTypes.number.isRequired,
        gral_career_development_rating: PropTypes.number.isRequired,
        gral_diversity_equal_opportunity_rating: PropTypes.number.isRequired,
        gral_working_environment_rating: PropTypes.number.isRequired,
        gral_salary_rating: PropTypes.number.isRequired,
    }).isRequired,
};

export default RadarChart;
