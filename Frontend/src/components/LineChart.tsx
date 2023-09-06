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
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
                display: true,
                labels: {
                    usePointStyle: true,
                }
        },
        title: {
            display: true,
            text: 'Profits Per Month in 2023 ',
            fontSize: 24,
        },
        backgroundColor:'#236f34',

        animations: {
            tension: {
                duration: 1200,
                easing: 'linear',
                from: 0.9,
                to: 0.4,
                loop: false
            }
        },
    },
    scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
                font: {
                    size: 14
                },
            }
        },
        y: {
            grid: {
                display: true
            },
            ticks: {
                font: {
                    size: 16
                }
            }
        }
    },

    // maintainAspectRatio: false
};

const dataset2 = ["10.00","20.00","30.00","40.00","50.00","40.00","35.00","44.00","80.00","36.00","60.00","1.00"];




const LineChart = ({sales}) => {
    const months =  [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    const salesByMonth = months.map((month, index) => {
        const salesForMonth = sales.filter((sale:any) => {
            const date = new Date(sale.sale_date);
            return date.getMonth() === index;
        });
        return {
            month: month,
            sales: salesForMonth.length > 0 ? salesForMonth : [{ sale_date: null, profit: 0 }]
        };
    });

    const monthlyProfits = salesByMonth.map(({ sales }) => {
        const profits = sales.reduce((total:any, sale:any) => {
            return total + sale.profit_margin;
        }, 0);
        return profits.toFixed(2);
    });

    const data = {
        labels:months,
        datasets: [
            {
                label: 'Profits per Month',
                data: monthlyProfits,
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4,
                // backgroundColor: '#bce7e7',
                backgroundColor: 'rgba(188,231,231,0.3)',
                opacity:0.3


            },
            {
                label: 'Loss per Month',
                data: dataset2,
                fill: true,
                borderColor: 'rgb(215,78,40)',
                tension: 0.4,
                // backgroundColor: '#bce7e7',
                backgroundColor: 'rgba(224,190,173,0.3)',
                opacity:0.3
            }
        ]
    };

    return (
        <div className='w-full relative'>
                <Line options={options} data={data} className='bg-white rounded-lg p-5'/>
        </div>
    );
};

export default LineChart;
