import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define TypeScript interfaces for your data
interface Pollutant {
  aqi: number;
  concentration: number;
  unit: string;
}

interface AirQualityData {
  overall_aqi: number;
  [key: string]: any; // Consider specifying a more detailed type if possible
}

interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

export default function AirQualityPage() {
  const [cityName, setCityName] = useState('Dublin');
  const [overallAQI, setOverallAQI] = useState<number | undefined>(undefined);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    async function fetchAirQualityData() {
      const response = await axios.get<AirQualityData>(
        `https://api.api-ninjas.com/v1/airquality?city=${cityName}`,
        {
          headers: {
            'X-Api-Key': 'YOUR_API_KEY',
          },
        }
      );

      const data = response.data;
      if (!data) return;

      setOverallAQI(data.overall_aqi);

      const pollutants = Object.entries(data).reduce((acc: {[key: string]: Pollutant}, [key, value]) => {
        if (value && typeof value === 'object' && key !== 'overall_aqi') {
          let unit = '';
          switch (key) {
            case 'CO':
            case 'NO2':
            case 'SO2':
              unit = 'ppm';
              break;
            case 'O3':
              unit = 'ppb';
              break;
            case 'PM2.5':
            case 'PM10':
              unit = 'µg/m^3';
              break;
            default:
              unit = '';
          }
          acc[key.toUpperCase()] = {
            aqi: value.aqi,
            concentration: value.concentration,
            unit,
          };
        }
        return acc;
      }, {});

      setChartData({
        labels: Object.keys(pollutants),
        datasets: [
          {
            label: 'AQI',
            data: Object.values(pollutants).map((p: Pollutant) => p.aqi),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      });
    }

    fetchAirQualityData();
  }, [cityName]);

  return (
    <main className="flex flex-col items-center p-12 bg-[url('../images/background.svg')] bg-cover min-h-screen">
      <div className="text-center">
        <h1 className="backdrop-blur-md bg-white/10 drop-shadow-lg font-extrabold sm:text-[3rem] py-8 px-4 text-white">
          Air Quality in {cityName} (live data from API-Ninjas.com)
        </h1>
        <p className="text-2xl text-white">Overall AQI: {overallAQI}</p>
      </div>

      <div className="w-full md:w-1/2 lg:max-w-xl mx-auto">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Pollutant AQI' },
            },
          }}
        />
      </div>
    </main>
  );
}
