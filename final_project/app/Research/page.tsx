"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart, { ArcElement, Tooltip, Legend } from "chart.js/auto";

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
      "HC Emissions",
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
          "rgb(80, 0, 0)",
          "rgb(0, 80, 0)",
          "rgb(0, 0, 80)",
          "rgb(80, 20, 0)",
          "rgb(142, 12, 55)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const dieselDataWithCo2 = {
    labels: [
      "CO2",
      "Carbon Monoxide",
      "HC Emissions",
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
          "rgb(139, 0, 139)",
          "rgb(0, 0, 255)",
          "rgb(255, 69, 0)",
          "rgb(142, 12, 55)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  Chart.register(ArcElement, Tooltip, Legend);

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-2 py-10">
        {/* Grid container for the grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card with Doughnut chart above the text */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            {" "}
            {/* Added items-center for centering */}
            {/* Chart container */}
            <div className="w-full mb-4">
              {" "}
              {/* Set width to full and added margin-bottom */}
              <Doughnut data={dieselData} options={{}} />
            </div>
            {/* Text container */}
            <div className="w-full text-center">
              <h2 className="text-xl font-semibold mb-2">
                Air Quality Insights
              </h2>
              <p className="text-gray-400">
                Emissions from diesel vehicles. Vehicle chosen for this average
                was a Volkswagen 2.0 TDI from 2016. This vehicle was fitted with
                SCR exhaust treatment to lower nox. The particulate filter was
                also fitted to reduce particulate matter. CO2 is not shown on
                the chart due to it making up VASTLY more of the emissions than
                the other pollutants. The value for this car is 123 grammes per
                kilometer.
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
            <div className="">
            </div>
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
      </div>
    </main>
  );
}
