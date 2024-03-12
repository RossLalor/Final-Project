// First, import Chart.js components and hooks
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
import axios from "axios";
import { useEffect, useState } from "react";

// Register the Chart.js components we will use
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function AirQualityPage() {
  const [cityName, setCityName] = useState("Dublin");
  const [overallAQI, setOverallAQI] = useState();
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    async function fetchAirQualityData() {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/airquality?city=${cityName}`,
        {
          headers: {
            "X-Api-Key": "XiAzckvlLZgmHJSbTBHblA==e2njZhactMjdBeTw",
          },
        }
      );

      const data = response.data;
      setOverallAQI(data.overall_aqi);

      const pollutants = Object.entries(data).reduce((acc, [key, value]) => {
        if (typeof value === "object" && key !== "overall_aqi") {
          let unit = "";
          switch (key) {
            case "CO":
            case "NO2":
            case "SO2":
              unit = "ppm";
              break;
            case "O3":
              unit = "ppb";
              break;
            case "PM2.5":
            case "PM10":
              unit = "µg/m^3";
              break;
            default:
              unit = "";
          }
          const updatedAcc: { [key: string]: any } = acc;
          updatedAcc[key.toUpperCase()] = {
            aqi: value.aqi,
            concentration: value.concentration,
            unit,
          };
          acc = updatedAcc;
        }
        return acc;
      }, {});

      setChartData({
        labels: Object.keys(pollutants),
        datasets: [
          {
            label: "AQI",
            data: Object.values(pollutants).map((p) => p.aqi),
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      });
    }

    fetchAirQualityData();
  }, [cityName]);

  return (
    <main className="flex flex-col items-center p-12 bg-[url('../images/background.svg')] bg-cover min-h-screen">
      <title>Air Quality Information</title>
      <div className="text-center">
        <h1 className="backdrop-blur-md bg-white/10 drop-shadow-lg font-extrabold sm:text-[3rem] py-8 px-4 text-white">
          Air Quality in {cityName} (live data from API-Ninjas.com)
        </h1>
        <p className="text-2xl text-white">Overall AQI: {overallAQI}</p>
      </div>

      {/* Chart container with specific width and maximum width */}
      <div className="w-full md:w-1/2 lg:max-w-xl mx-auto">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Pollutant AQI" },
            },
          }}
        />
      </div>
    </main>
  );
}
