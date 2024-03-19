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
  const [cityName, setCityName] = useState("Beijing");
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
    <main className="flex flex-col items-center p-12 bg-[url('../images/background.svg')] bg-cover min-h-screen">
      <div className="text-center">
        <h1 className="backdrop-blur-md bg-white/10 drop-shadow-lg font-extrabold sm:text-[3rem] py-8 px-4 text-white">
          Air Quality in {cityName} (live data from API-Ninjas.com)
        </h1>
        <p className="text-2xl text-white">Overall AQI: {overallAQI}</p>
        <div className="mt-4">
          <input
            type="text"
            value={tempCityName}
            onChange={handleCityNameChange}
            placeholder="Enter City Name"
            className="text-black p-2"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 ml-2"
          >
            Apply
          </button>
        </div>
      </div>
      <div className="backdrop-blue-md bg-blue-900 w-full h-96 mt-8">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: "top" },
              title: {
                display: true,
                text: "Pollutant AQI",
              },
            },
            scales: {
              x: {
                ticks: {
                  font: {
                    size: 14,
                    family: "Arial",
                  },
                  color: "#FF0000",
                },
                title: {
                  display: true,
                  text: "Pollutants",
                  font: {
                    size: 16,
                    family: "Arial",
                  },
                  color: "#FF0000",
                },
              },
              y: {
                ticks: {
                  font: {
                    size: 14,
                    family: "Arial",
                  },
                  color: "#00FF00",
                },
                title: {
                  display: true,
                  text: "AQI",
                  font: {
                    size: 16,
                    family: "Arial",
                  },
                  color: "#00FF00",
                },
              },
            },
          }}
        />
      </div>
      {/* Discussion section for each emission type */}
      <div className="w-full max-w-4xl mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="backdrop-blue-md flex flex-col items-center justify-center bg-black/60 p-4 rounded-lg shadow">
          <h3 className="font-bold text-md">CO</h3>
          <p className="text-sm">
            Found in diesel and petrol exhaust fumes.
            Carbon monoxide (CO) is a colorless, odorless gas that can be
            harmful when inhaled in large amounts. It affects the
            oxygen-carrying capacity of blood.
          </p>
        </div>
        <div className="backdrop-blue-md flex flex-col items-center justify-center bg-black/60 p-4 rounded-lg shadow">
          <h3 className="font-bold text-md">NO2</h3>
          <p className="text-sm">
            Found in Diesel cars and coal / oil / natural gas.
            Nitrogen dioxide (NO2) contributes to the formation of smog and acid
            rain. It can irritate airways in the human respiratory system.
          </p>
        </div>
        <div className="backdrop-blue-md flex flex-col items-center justify-center bg-black/60 p-4 rounded-lg shadow">
          <h3 className="font-bold text-md">SO2</h3>
          <p className="text-sm">
            Found from burning coal / oil.
            Sulfur dioxide (SO2) is associated with increased respiratory
            symptoms and disease, difficulty in breathing, and premature death.
          </p>
        </div>
        <div className="backdrop-blue-md flex flex-col items-center justify-center bg-black/60 p-4 rounded-lg shadow">
          <h3 className="font-bold text-md">O3</h3>
          <p className="text-sm">
            Found from Exhaust fumes / power plants, industrial boilers, refineries, and chemical plants.
            Ground-level ozone (O3) can cause respiratory issues, trigger
            asthma, reduce lung function, and cause lung diseases.
          </p>
        </div>
        <div className="backdrop-blue-md flex flex-col items-center justify-center bg-black/60 p-4 rounded-lg shadow">
          <h3 className="font-bold text-md">PM2.5</h3>
          <p className="text-sm">
            Found from diesel & petrol fumes aswell as from wood and oil burning.
            Particulate matter smaller than 2.5 micrometers (PM2.5) can
            penetrate deep into the lungs and even enter the bloodstream,
            causing cardiovascular and respiratory diseases.
          </p>
        </div>
        <div className="backdrop-blue-md flex flex-col items-center justify-center bg-black/60 p-4 rounded-lg shadow">
          <h3 className="font-bold text-md">PM10</h3>
          <p className="text-sm">
            Found from dust from construction sites, landfills and agriculture, wildfires and brush/waste burning, industrial sources, wind-blown dust from open lands, pollen and fragments of bacteria.
            Particulate matter smaller than 10 micrometers (PM10) can cause
            health problems such as heart or lung diseases, and can even lead to
            premature death.
          </p>
        </div>
      </div>
    </main>
  );
}
