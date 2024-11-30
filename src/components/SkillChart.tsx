import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

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
    slug: string;
  }[];
  chartData: {
    labels: string[];
    data: string[];
    slug: string;
  };
}

export default function SkillChart({ data, chartData }: SkillChartProps) {
  const [currentChart, setCurrentChart] = React.useState(chartData);

  const chartDatainternal = {
    labels: currentChart.labels,
    datasets: [
      {
        label: "Skills",
        data: currentChart.data,
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderColor: "#00ff00",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        angleLines: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        pointLabels: {
          color: "#ffffff",
          font: {
            size: 16,
            family: "Basement, sans-serif",
          },
        },
        ticks: {
          color: "#ffffff",
          backdropColor: "transparent",
          min: 0,
          max: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const onSkillChartLoad = (cat: any) => {
    if (cat === "Overall") {
      setCurrentChart(chartData);
      return;
    }

    const chart = data.find((chart: any) => {
      console.log("dd", chart, cat);
      return chart.slug === cat;
    });
    if (!chart) {
      return;
    }
    setCurrentChart(chart);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex  justify-center flex-wrap gap-3 mb-10">
        <button
          className="inline-block bg-primary text-dark font-basement px-8 py-4 rounded-lg hover:bg-white transition-colors"
          onClick={() => onSkillChartLoad("Overall")}
        >
          Overall
        </button>
        <button
          className="inline-block bg-secondary/70 text-dark font-basement px-8 py-4 rounded-lg hover:bg-white transition-colors"
          onClick={() => onSkillChartLoad("Front-end")}
        >
          Front-end
        </button>
        <button
          className="inline-block bg-tertiary text-dark font-basement px-8 py-4 rounded-lg hover:bg-white transition-colors"
          onClick={() => onSkillChartLoad("Backend")}
        >
          Backend
        </button>
        <button
          className="inline-block bg-blue text-dark font-basement px-8 py-4 rounded-lg hover:bg-white transition-colors"
          onClick={() => onSkillChartLoad("Database")}
        >
          Database
        </button>
        <button
          className="inline-block bg-white text-dark font-basement px-8 py-4 rounded-lg hover:bg-white transition-colors"
          onClick={() => onSkillChartLoad("Design")}
        >
          Design
        </button>
        <button
          className="inline-block bg-orange text-dark font-basement px-8 py-4 rounded-lg hover:bg-white transition-colors"
          onClick={() => onSkillChartLoad("Cloud")}
        >
          Cloud
        </button>
        <button
          className="inline-block bg-primary text-dark font-basement px-8 py-4 rounded-lg hover:bg-white transition-colors"
          onClick={() => onSkillChartLoad("DevOps")}
        >
          DevOps
        </button>
        <button
          className="inline-block bg-blue/90 text-dark font-basement px-8 py-4 rounded-lg hover:bg-white transition-colors"
          onClick={() => onSkillChartLoad("Apps")}
        >
          Apps
        </button>
        <button
          className="inline-block bg-primary/70 text-dark font-basement px-8 py-4 rounded-lg hover:bg-white transition-colors"
          onClick={() => onSkillChartLoad("Music")}
        >
          Music
        </button>
      </div>

      <Radar data={chartDatainternal} options={options} />
    </div>
  );
}
