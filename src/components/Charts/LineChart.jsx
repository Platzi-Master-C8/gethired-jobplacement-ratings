import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            display: false,
        },
        title: {
            display: true,
            text: 'Yearly Chart',
        },
    },

    scales: {
        y: {
            min: 0,
            max: 5,
        },
    },
};

const LineChart = ({ yearlyData }) => {
    const LineChartData = {
        labels: yearlyData.map((data) => data.year),
        datasets: [
            {
                data: yearlyData.map((data) => data.rating),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return <Line data={LineChartData} options={options} />;
};

LineChart.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    yearlyData: PropTypes.array.isRequired,
};

export default LineChart;
