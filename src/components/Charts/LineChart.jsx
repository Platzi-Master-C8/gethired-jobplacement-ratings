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

const labels = ['2017', '2018', '2019', '2020', '2021'];

const data = {
    labels,
    datasets: [
        {
            data: [2.5, 3, 2.7, 4.5, 5],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

const LineChart = () => {
    return <Line data={data} options={options} />;
};

export default LineChart;
