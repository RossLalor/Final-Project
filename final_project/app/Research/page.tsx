"use client";
import React, { useState } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import Chart, { ArcElement, Tooltip, Legend, ChartData } from "chart.js/auto";

export default function AirQualityPage() {
  const data = {
    labels: [
      "Petrol",
      "Diesel",
      "Petrol Hybrid",
      "Electric",
      "Plug in Hybrids",
    ],
    datasets: [
      {
        label: "Car Fuel Types in Ireland (percentage)",
        data: [30.25, 63.08, 3.69, 1.35, 1.18],
        backgroundColor: [
          "rgb(40, 180, 40)",
          "rgb(0, 0, 0)",
          "rgb(139, 0, 139)",
          "rgb(0, 0, 255)",
          "rgb(255, 69, 0)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const dieselData = {
    labels: [
      "CO2",
      "Carbon Monoxide",
      "NOx Emissions",
      "HC + NOx Emissions",
      "Particulate Matter",
    ],
    datasets: [
      {
        label: "Average Diesel Car Emissions in g/km",
        data: [0, 0.19, 0.047, 0.068, 0.04],
        backgroundColor: [
          "rgb(40, 180, 40)",
          "rgb(160, 0, 0)",
          "rgb(40, 0, 160)",
          "rgb(200, 100, 0)",
          "rgb(200, 200, 0)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const dieselDataWithCo2 = {
    labels: [
      "CO2",
      "Carbon Monoxide",
      "NOx Emissions",
      "HC + NOx Emissions",
      "Particulate Matter",
    ],
    datasets: [
      {
        label: "Average Diesel Car Emissions",
        data: [123, 0.19, 0.047, 0.068, 0.04],
        backgroundColor: [
          "rgb(40, 180, 40)",
          "rgb(0, 0, 0)",
          "rgb(0, 0, 255)",
          "rgb(255, 69, 0)",
          "rgb(142, 12, 55)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const AQIData: ChartData<"bar" | "line", number[], string> = {
    labels: [
      "Monday 00:00",
      "Monday 17:00",
      "Tuesday 00:00",
      "Tuesday 17:00",
      "Wednesday 00:00",
      "Wednesday 17:00",
      "Thursday 00:00",
      "Thursday 17:00",
      "Friday 00:00",
      "Friday 17:00",
      "Saturday 00:00",
      "Saturday 17:00",
      "Sunday 00:00",
      "Sunday 17:00",
    ],
    datasets: [
      {
        type: "bar",
        label: "Bar Dataset",
        data: [69, 200, 45, 190, 44, 212, 34, 182, 57, 168, 61, 177, 41, 200],
        backgroundColor: ["rgba(0, 255, 255, 0.2)"],
        borderColor: ["rgb(255,255,255)"],
        borderWidth: 1,
      },
      {
        type: "line",
        label: "Line Dataset",
        data: [69, 200, 45, 190, 44, 212, 34, 182, 57, 168, 61, 177, 41, 200],
        borderColor: "rgb(0,255,255)",
        backgroundColor: "rgba(0,255,255, 0.4)",
        tension: 0.4,
      },
    ],
  };

  const [showCo2, setShowCo2] = useState(false);

  Chart.register(ArcElement, Tooltip, Legend);

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-2 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <div className="w-full mb-4">
              <Doughnut
                data={showCo2 ? dieselDataWithCo2 : dieselData}
                options={{}}
              />
            </div>
            <div className="w-full text-center">
              <h2 className="text-xl font-semibold mb-2">
                Air Quality Insights
              </h2>
              <button
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                onClick={() => setShowCo2(!showCo2)}
              >
                Toggle CO2 Data
              </button>
              <p className="text-gray-400">
                Emissions from diesel vehicles. Vehicle chosen for this average
                was a Volkswagen 2.0 TDI from 2016. This vehicle was fitted with
                SCR exhaust treatment to lower nox. The particulate filter was
                also fitted to reduce particulate matter. A button to toggle Co2
                was added due to Co2 making up so much of the percentage of
                emissions that it was impossible to see the other emissions.
              </p>
              <div className="text-sm text-gray-500">
                <p>
                  Data sourced from Car Emissions.com
                  (https://car-emissions.com/cars/view/78378)
                </p>
              </div>
            </div>
          </div>

          {/* Card with Doughnut chart above the text */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            {/* Chart container */}
            <div className="mb-4">
              <Doughnut data={data} options={{}} />
            </div>
            {/* Text container */}
            <div className="w-full text-center">
              <h2 className="text-xl font-semibold mb-2">
                Car Fuel Types in Ireland
              </h2>
              <p className="text-gray-400">
                As we can see from the graph 63.08% of cars in Ireland run on
                diesel, which is a major contributor to air pollution. This data
                is crucial for policymakers to develop strategies to reduce
                emissions and improve air quality. The transition to electric
                and hybrid vehicles can play a significant role in achieving
                this goal.
              </p>
              <div className="text-sm text-gray-500">
                <p>
                  Data sourced from Department of Transport Irish Bulletin of
                  Vehicle and Driver Statistics (2022)
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-10">
            <div className=""></div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
          <div className="font-semibold cursor-pointer text-center">
            Findings
          </div>
          <p className="text-gray-400 mt-2 text-center">
            As we can see from the data, diesel cars are a major contributor to
            air pollution. The particulate matter and NOx emissions are
            particularly harmful to human health. The transition to electric and
            hybrid vehicles is crucial to reduce emissions and improve air
            quality. The data also shows that diesel cars emit a significant
            amount of CO2, which is a greenhouse gas that contributes to climate
            change.
          </p>
        </div>
        <div className="bg-gray-800 p-6 h-[50vh] rounded-lg shadow-lg mt-4">
          <div className="font-semibold text-center">
            AQI over a 7 Day Period in Dublin Ireland
          </div>
          <Bar
            data={AQIData as ChartData<"bar", number[], string>}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  ticks: {
                    color: "white",
                  },
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)", //adjusts grid line colors
                  },
                },
                y: {
                  ticks: {
                    color: "white",
                  },
                  grid: {
                    color: "rgba(255, 255, 255, 0.1)", //adjusts grid line colors
                  },
                },
              },
            }}
          />
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
          <div className="font-semibold cursor-pointer text-center">
            AQI Examination
          </div>
          <p className="text-gray-400 mt-2 text-center">
            Plotted over a seven day period in Dublin city (22nd April - 28th
            April), we can clearly see a sinusoidal graph that has developed.
            This is due to emissions raising and falling as the day goes
            onwards, particularly around 17:00. I chose to log this time
            specifically due to it being peak traffic time in Dublin city. This
            data was sourced from using the API-Ninjas AQI API found on the AQI
            page. Interestingly, you can see the emissions at midnight raise on
            Fridays and Saturdays. This is possibly due to night activity being
            higher on these days and more taxis driving around dublin as a
            result. Also worth considering is the nightlink buses that are
            active on the weekends. If every car in Dublin were electric, this
            graph would be diminished greatly considering that emissions are
            raising at peak times so drastically. Emissions would not go to zero
            as things like chimneys and factories would still be running
            however.
          </p>
        </div>
      </div>
    </main>
  );
}
