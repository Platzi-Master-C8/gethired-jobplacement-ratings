import React from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarData = {
    labels: ['Work-life balance', 'Diversity', 'Carrer development', 'Perks'],
    datasets: [
        {
            label: 'March',
            backgroundColor: 'rgba(34, 202, 236, .2)',
            borderColor: 'rgba(34, 202, 236, 1)',
            pointBackgroundColor: 'rgba(34, 202, 236, 1)',
            poingBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(34, 202, 236, 1)',
            data: [4.4, 3, 4.5, 2],
        },
    ],
};
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
    maintainAspectRatio: false,

    plugins: {
        legend: {
            display: false,
        },
    },
};

const RadarChart = () => {
    return <Radar data={RadarData} width="400px" height="400px" options={RadarOptions} />;
};

export default RadarChart;
