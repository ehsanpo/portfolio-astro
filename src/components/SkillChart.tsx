import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface SkillChartProps {
  data: {
    labels: string[];
    data: string[];
  };
}

export default function SkillChart({ data }: SkillChartProps) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Skills',
        data: data.data.map(Number),
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        borderColor: '#00ff00',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: '#ffffff',
        },
        ticks: {
          color: '#ffffff',
          backdropColor: 'transparent',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Radar data={chartData} options={options} />
    </div>
  );
}