import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const [dataSource, setDataSource] = useState({
        datasets: [{
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                'purple',
                'green',
                'black'
            ]
        }],
        labels: []
    });

    useEffect(() => {
        const getBudget = async () => {
            try {
                const res = await axios.get('http://localhost:3000/budget');
                const budgetData = res.data.myBudget;

                const data = budgetData.map(item => item.budget);
                const labels = budgetData.map(item => item.title);

                setDataSource({
                    datasets: [{
                        data: data,
                        backgroundColor: [
                            '#ffcd56',
                            '#ff6384',
                            '#36a2eb',
                            '#fd6b19',
                            'purple',
                            'green',
                            'black'
                        ]
                    }],
                    labels: labels
                });
            } catch (error) {
                console.error('Error fetching budget data:', error);
            }
        };

        getBudget();
    }, []);

    return (
        <div>
            <Pie data={dataSource} height={200}
                width={200} />
        </div>
    );
};

export default PieChart;
