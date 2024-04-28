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
      "Hydrocarbon Emissions",
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
        label: "Average HVO Car Emissions in g/km",
        data: [0.1444, 0.03431, 0.0272, 0.028],
        backgroundColor: ["rgb(22,163,74)"],
        hoverOffset: 4,
      },
    ],
  };

  const dieselWithHVO = {
    labels: ["Water (litres)"],
    datasets: [
      {
        label: "Water to extinguish petrol car fire (litres)",
        data: [3800],
        backgroundColor: ["rgb(160,0,0)"],
        hoverOffset: 4,
      },
      {
        label: "Water to extinguish electric car fire (litres)",
        data: [88800],
        backgroundColor: ["rgb(255,0,0)"],
        hoverOffset: 4,
      },
    ],
  };

  const [showCo2, setShowCo2] = useState(false);
  Chart.register(ArcElement, Tooltip, Legend);
  return (
    <>
      <main className="min-h-screen bg-slate-900 text-white animate">
        <div className="container mx-auto px-18 py-10">
          <div className="flex justify-center py-4">
            <h1 className="text-4xl sm:text-6xl h-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              Leccy Cars
            </h1>
          </div>

          <div className="justify-center py-10">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <div className="font-semibold cursor-pointer ">
                Electric Car Safety Concerns
              </div>
              <p className="text-gray-400 mt-2">
                The major safety concern with electric cars is the battery. If
                the battery overheats or is punctured, it will catch fire.
                Manufacturers go to great lengths to ensure that this does not
                happen but from time to time a battery puncture will occur or a
                spontaneous failure of a cell. This cell failure will spread to
                other cells as it overheats and catches fire and what ends up
                occuring is known as thermal runaway. This wouldn&apos;t be so
                bad if you could just pour water on the fire to stop it, but the
                self sustaining aspect of a lithium ion fire has lead to this
                not being a viable option or requiring an extremely large amount
                of water to accomplish. <br /> Some fire fighters have adopted
                an approach to just let the vehicle burn itself out as once the
                lithium battery has lost all of its energy the reaction will
                stop. Attempting to extinguish the fire can lead to spontaneous
                reignition while transporting the charred remains away to be
                disposed of. <br />
              </p>
              <p className="text-gray-500 text-wrap break-all">
                https://www.frontiersin.org/articles/10.3389/fenrg.2019.00065/full
              </p>
            </div>

            <div className="mt-8">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <div className="font-semibold cursor-pointer text-xl">
                  Spontaneous failure
                </div>
                <p className="text-gray-400 mt-2 justify ">
                  Thermal runaway is already a big enough concern, but electric
                  cars are known to suffer spontaneous battery failure. A
                  microscopic manufacturing defect could occur in a cell which
                  will cause it to overheat and fail and thus begin the chain
                  reaction with no obvious reason from the outside. This is
                  extremely concerning as a possibility as the car could be
                  somewhere sensitive such as a garage or a ship or the like.
                  With them combusting and not having a place to put them, the
                  fire can destroy everything around it. In a parking garage
                  this could even destroy the whole building.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 h-[36vh] p-6 rounded-lg shadow-lg mt-8">
              <Bar
                data={showCo2 ? dieselWithHVO : dieselWithHVO}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  indexAxis: "y",
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
                <div className="font-semibold cursor-pointer text-xl">
                  So What Can Be Done?
                </div>
                <p className="text-gray-400 mt-2">
                  Not a whole lot can be done as long as manufacturers remain
                  dependent on lithium ion based battery chemistry. Another
                  large issue with this is that the amount of water necessary to
                  extinguish an electric car fire is orders of magnitude larger
                  than an ordinary fire. Research conducted by CTIF showed that
                  it can take up to 150,000 litres of water to put out an EV
                  fire. Compare that to an internal combustion based vehicle
                  which needs 4000 litres on average to be extinguished.
                </p>

                <p className="text-slate-500 text-wrap break-all">
                  https://ctif.org/news/150-000-liters-water-needed-put-out-fire-electric-car
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <div className="font-semibold cursor-pointer text-xl">
                  Findings
                </div>
                <p className="text-gray-400 mt-2">
                  Even taking this into account, electric cars are still safer
                  due to them being less likely to burst into flames in an
                  accident, having a stronger chassis to carry the extra weight
                  AND no engine in the front which allows more room for
                  strengthening structures and a much lower centre of gravity
                  due to the batteries being underneath the floor which reduces
                  the risk of roll over accidents.
                </p>
                <p className="text-slate-500 text-wrap break-all">
                  Data sourced from: <br></br>
                  https://www.pendle.gov.uk/download/meetings/id/26369/item_15_appendix_3#:~:text=for%20every%201%2C000%20litres%20of%20HVO%20burned,will%20produce%200.195%20tonnes%20CO2.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
