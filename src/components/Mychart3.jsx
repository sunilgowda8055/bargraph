import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import GreenButton from './GreenButton';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartContainerStyle = {
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Apply box shadow
  borderRadius: '2px', // Add border radius for rounded corners
  padding: '10px', // Add padding for spacing
  overflow: 'visible',
  position: 'relative',
};

const topText = {
  position: 'absolute',
  top: '10px',
  left: '10px',
  fontSize: '16px',
  fontWeight: 'bold',
};

const roundButton = {
  position: 'absolute',
  top: '10px',
  right: '10px',
};




export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'X Axis',
      },
      grid: {
        display: false,
      },
      ticks: {
        maxRotation: 0, // Rotate labels to 0 degrees
        minRotation: 0,
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Y Axis',
      },
      grid: {
        display: true,
      },
      ticks: {
        maxRotation: 45, // Rotate labels to 45 degrees
        minRotation: 45,
        maxTicksLimit: 4,
        stepSize: 5, // Specify the interval between ticks
        min: 0,      // Specify the minimum value
        max: 100,
      },
    },
  },
};


// let labels = ['01/24/2024', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
for (let i = 8; i <= 20; i++) {
  labels.push('Label ' + i)
}

 
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [30,30,30,10,70,50,20,60,70],
    
      // backgroundColor: 'rgba(0, 100, 145, 0.5)',
      backgroundColor: '#6d93f2',
      barPercentage: 0.9,
    //   barThickness: 60,
    },
    {
      label: 'Dataset 2',
      data: [70,30,40,20,60,40,40,60,60],
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    backgroundColor: '#6d93f2',
    backgroundColor: '#6d93f2',
    barPercentage:0.8
    },
  ],
};

export function Mychart3() {
  
  return (
    <div style={chartContainerStyle}>
    <div style={topText}>Mill 6</div>
    <div style={roundButton}><GreenButton /></div>
    <Bar options={options} data={data} />
    </div>

  )
}