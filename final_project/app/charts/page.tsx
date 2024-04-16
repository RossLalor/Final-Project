"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
//import "../app/globals.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Pollutant {
  aqi: number;
  concentration: number;
  unit: string;
}

interface AirQualityData {
  overall_aqi: number;
  [key: string]: any;
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
  const [cityName, setCityName] = useState("Dublin");
  const [tempCityName, setTempCityName] = useState("");
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
            "X-Api-Key": "XiAzckvlLZgmHJSbTBHblA==e2njZhactMjdBeTw",
          },
        }
      );

      const data = response.data;
      if (!data) return;

      setOverallAQI(data.overall_aqi);

      const pollutants = Object.entries(data).reduce(
        (acc: { [key: string]: Pollutant }, [key, value]) => {
          if (value && typeof value === "object" && key !== "overall_aqi") {
            let unit = "";
            switch (key) {
              case "CO":
                unit = "ppm";
                break;
              case "NO2":
                unit = "ppm";
                break;
              case "SO2":
                unit = "ppm";
                break;
              case "O3":
                unit = "ppb";
                break;
              case "PM2.5":
                unit = "µg/m^3";
                break;
              case "PM10":
                unit = "µg/m^3";
                break;
              default:
                unit = "";
            }
            acc[key.toUpperCase()] = {
              aqi: value.aqi,
              concentration: value.concentration,
              unit,
            };
          }
          return acc;
        },
        {}
      );

      setChartData({
        labels: Object.keys(pollutants),
        datasets: [
          {
            label: "AQI",
            data: Object.values(pollutants).map((p) => p.aqi),
            backgroundColor: "rgba(255, 0, 0, 0.9)",
          },
        ],
      });
    }

    fetchAirQualityData();
  }, [cityName]);

  const handleCityNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempCityName(event.target.value);
  };

  const handleSubmit = () => {
    setCityName(tempCityName);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            Air Quality in {cityName} (live data from API-Ninjas.com)
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mt-4">
            Overall AQI: {overallAQI}
          </p>
          <div className="mt-4">
            <input
              type="text"
              value={tempCityName}
              onChange={handleCityNameChange}
              placeholder="Enter City Name"
              maxLength={30}
              className="p-2 bg-gray-700 text-white rounded-md"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-md"
            >
              Apply
            </button>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-8">
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    font: { size: 14, family: "Arial" },
                    color: "#ffffff",
                  },
                },
                title: {
                  display: true,
                  text: "Pollutant AQI",
                  font: { size: 20, family: "Arial" },
                  color: "#ffffff",
                },
              },
              scales: {
                x: {
                  ticks: {
                    font: { size: 14, family: "Arial" },
                    color: "#ffffff",
                  },
                  title: {
                    display: true,
                    text: "Pollutants",
                    font: { size: 16, family: "Arial" },
                    color: "#ffffff",
                  },
                },
                y: {
                  ticks: {
                    font: { size: 14, family: "Arial" },
                    color: "#ffffff",
                  },
                  title: {
                    display: true,
                    text: "AQI",
                    font: { size: 16, family: "Arial" },
                    color: "#ffffff",
                  },
                },
              },
            }}
          />
        </div>
        {/* Discussion section for each emission type */}
        <div className="flex justify-center items-center">
        <div className="w-full max-w-4xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-2">CO</h3>
            <p className="text-gray-400">
              Found in diesel and petrol exhaust fumes. Carbon monoxide (CO) is
              a colorless, odorless gas that can be harmful when inhaled in
              large amounts. It affects the oxygen-carrying capacity of blood.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-2">NO2</h3>
            <p className="text-gray-400">
              Found in Diesel cars and coal / oil / natural gas. Nitrogen
              dioxide (NO2) contributes to the formation of smog and acid rain.
              It can irritate airways in the human respiratory system.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-2">SO2</h3>
            <p className="text-gray-400">
              Found from burning coal / oil. Sulfur dioxide (SO2) is associated
              with increased respiratory symptoms and disease, difficulty in
              breathing, and premature death.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-2">O3</h3>
            <p className="text-gray-400">
              Found from Exhaust fumes / power plants, industrial boilers,
              refineries, and chemical plants. Ground-level ozone (O3) can cause
              respiratory issues, trigger asthma, reduce lung function, and
              cause lung diseases.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-2">PM2.5</h3>
            <p className="text-gray-400">
              Found from diesel & petrol fumes as well as from wood and oil
              burning. Particulate matter smaller than 2.5 micrometers (PM2.5)
              can penetrate deep into the lungs and even enter the bloodstream,
              causing cardiovascular and respiratory diseases.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-2">PM10</h3>
            <p className="text-gray-400">
              Found from dust from construction sites, landfills and
              agriculture, wildfires and brush/waste burning, industrial
              sources, wind-blown dust from open lands, pollen and fragments of
              bacteria. Particulate matter smaller than 10 micrometers (PM10)
              can cause health problems such as heart or lung diseases, and can
              even lead to premature death.
            </p>
          </div>
          
        </div>
      </div>
      </div>
    </main>
  );
}
