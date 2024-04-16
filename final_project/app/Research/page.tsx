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

  Chart.register(ArcElement, Tooltip, Legend);

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-2 py-10">
        {/* Grid container for the grid of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card with Doughnut chart above the text */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
            {" "}
            {/* Added items-center for centering */}
            {/* Chart container */}
            <div className="w-full mb-4">
              {" "}
              {/* Set width to full and added margin-bottom */}
              <Doughnut data={data} options={{ maintainAspectRatio: false }} />
            </div>
            {/* Text container */}
            <div className="w-full text-center">
              {" "}
              {/* Set width to full and text alignment to center */}
              <h2 className="text-xl font-semibold mb-2">
                Air Quality Insights
              </h2>
              <p className="text-gray-400">
                Explore the various factors that impact air quality, including
                emissions from vehicles, industrial activities, and natural
                phenomena.
              </p>
            </div>
          </div>

          {/* Repeat the same structure for the second card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            {/* Chart container */}
            <div className="mb-4">
              <Doughnut data={data} />
            </div>
            {/* Text container */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Car Fuel Types in Ireland
              </h2>
              <p className="text-gray-400">
                As we can see from the graph 63.08% of cars in Ireland run
                on diesel, which is a major contributor to air pollution. This
                data is crucial for policymakers to develop strategies to reduce
                emissions and improve air quality. The transition to electric
                and hybrid vehicles can play a significant role in achieving
                this goal. 
              </p>
              <div className="text-sm text-gray-500"><p>Data sourced from Department of Transport Irish Bulletin of Vehicle and Driver Statistics (2022)</p></div>
            </div>
          </div>
          {/* Additional cards can be added here following the same structure */}
        </div>
      </div>
    </main>
  );
}
