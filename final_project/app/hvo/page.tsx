"use client";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart, { ArcElement, Tooltip, Legend } from "chart.js/auto";
export default function Home() {
  const [delayed, setDelayed] = useState(false); // Proper state management
  const dieselData = {
    labels: [
      "Carbon Monoxide",
      "NOx Emissions",
      "HC + NOx Emissions",
      "Particulate Matter",
    ],
    datasets: [
      {
        label: "Average Diesel Car Emissions in g/km",
        data: [0.19, 0.047, 0.068, 0.04],
        backgroundColor: ["rgb(59,130,246)"],
        hoverOffset: 4,
      },
      {
        label: "Average Diesel Car Emissions",
        data: [0.1444, 0.03431, 0.0272, 0.028],
        backgroundColor: ["rgb(22,163,74)"],
        hoverOffset: 4,
      },
    ],
  };
  // https://www.mdpi.com/1996-1073/16/12/4785
  const dieselWithHVO = {
    labels: ["CO2 Comparison"],
    datasets: [
      {
        label: "Average Diesel Car Emissions in g/km",
        data: [123],
        backgroundColor: ["rgb(59,130,246)"],
        hoverOffset: 4,
      },
      {
        label: "Average Diesel Car Emissions with HVO in g/km",
        data: [12.3],
        backgroundColor: ["rgb(22,163,74)"],
        hoverOffset: 4,
      },
    ],
  };

  const [showCo2, setShowCo2] = useState(false);
  Chart.register(ArcElement, Tooltip, Legend);
  return (
    <>
      <main className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-18 py-10">
          <div className="flex justify-center py-4">
            <h1 className="text-4xl sm:text-6xl h-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              About Leccy Cars
            </h1>
          </div>

          <div className="justify-center py-10">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <div className="font-semibold cursor-pointer ">
                What exactly is HVO?
              </div>
              <p className="text-gray-400 mt-2">
                HVO is a renewable diesel fuel that is made from waste and
                residue fats and oils. It is a drop-in fuel, meaning it can be
                used in existing diesel engines without any modifications. HVO
                is a sustainable alternative to traditional diesel fuel, as it
                produces significantly lower greenhouse gas emissions. This is
                showing to be a promising alternative to traditional diesel
                fuel, and is being used in various industries, including
                transportation, construction, and agriculture. This benefit is
                promising to shake up the industry as it begs the question of
                whether an electric car is even necessary considering how much
                emissions are saved from this. It also bridges the gap of one of
                Diesel&apos;s shortcomings which is that it emits a lot of gases that
                are very harmful to animal and human life.
              </p>
            </div>
            <div className="bg-gray-800 h-[60vh] p-6 rounded-lg shadow-lg mt-8">
              <Bar
                data={showCo2 ? dieselWithHVO : dieselData}
                options={{
                  indexAxis: "y",
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      ticks: {
                        color: "white", // Sets the x-axis label colors to white
                      },
                      grid: {
                        color: "rgba(255, 255, 255, 0.1)", // Optional: adjusts grid line colors
                      },
                    },
                    y: {
                      ticks: {
                        color: "white", // Sets the y-axis label colors to white
                      },
                      grid: {
                        color: "rgba(255, 255, 255, 0.1)", // Optional: adjusts grid line colors
                      },
                    },
                  },
                  animation: {
                    onComplete: () => {
                      setDelayed(true);
                    },
                    delay: (context) => {
                      let delay = 0;
                      if (
                        context.type === "data" &&
                        context.mode === "default" &&
                        !delayed
                      ) {
                        delay =
                          context.dataIndex * 500 + context.datasetIndex * 500;
                      }
                      return delay;
                    },
                  },
                }}
              />
            </div>
            <div className="mt-8">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <div className="font-semibold cursor-pointer">
                  What exactly is HVO?
                </div>
                <p className="text-gray-400 mt-2">
                  It isn&apos;t just these emissions that are reduced however,
                  the largest reduction by far is Carbon Dioxide which sees up
                  to a 90 percent reduction!
                </p>
              </div>
            </div>
            <div className="bg-gray-800 h-[22vh] p-6 rounded-lg shadow-lg mt-8">
              <Bar
                data={showCo2 ? dieselWithHVO : dieselWithHVO}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  indexAxis: "y",
                  scales: {
                    x: {
                      ticks: {
                        color: "white", // Sets the x-axis label colors to white
                      },
                      grid: {
                        color: "rgba(255, 255, 255, 0.1)", // Optional: adjusts grid line colors
                      },
                    },
                    y: {
                      ticks: {
                        color: "white", // Sets the y-axis label colors to white
                      },
                      grid: {
                        color: "rgba(255, 255, 255, 0.1)", // Optional: adjusts grid line colors
                      },
                    },
                  },
                  animation: {
                    onComplete: () => {
                      setDelayed(true);
                    },
                    delay: (context) => {
                      let delay = 0;
                      if (
                        context.type === "data" &&
                        context.mode === "default" &&
                        !delayed
                      ) {
                        delay =
                          context.dataIndex * 500 + context.datasetIndex * 500;
                      }
                      return delay;
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
