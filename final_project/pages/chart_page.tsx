import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Electric Cars Sold (thousands)',
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55, 40, 12, 4],
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const ChartPage = () => {
  return (
   <div className="flex justify-center items-center h-screen">
     <div className="max-w-xl p-5"> {/* Adjust max-w-* as needed */}
       <Line data={data} options={options} width={1000} />
     </div>
   </div>
  );
};

export default ChartPage;