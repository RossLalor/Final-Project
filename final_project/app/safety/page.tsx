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
    labels: ["CO2 Comparison"],
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
      <main className="min-h-screen bg-slate-900 text-white">
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
                  So what&apos;s the catch?
                </div>
                <p className="text-gray-400 mt-2">
                  There are a couple of downsides to HVO fuel. Firstly, it is
                  quite difficult to find so far with very few pumps in Ireland
                  stocking it as of the time of writing. Secondly, it is ever so
                  slightly less energy dense than Diesel so you will end up
                  using more of it for the same distance being covered. This
                  will be offset slightly by the fact that because it is so much
                  cleaner, your car&apos;s engine will remain cleaner and run
                  more efficiently for longer. And finally, it is more expensive
                  than Diesel at the moment, however, this is expected to change
                  as popularity rises and more pumps end up stocking it.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <div className="font-semibold cursor-pointer text-xl">
                  Findings
                </div>
                <p className="text-gray-400 mt-2">
                  Overall, HVO looks to be a very promising stopgap between the
                  transition to fully electric cars or even a solution that
                  would negate the need for fully electric cars completely. One
                  extremely key advantage is it is a drop in solution, meaning,
                  there are no engineering challenges engine wise and car design
                  wise to it&apos;s widespread adoption. You just put it in your
                  car instead of diesel and drive. This would remove the need to
                  manufacturer millions of electric cars which in itself would
                  be a massive reduction in emissions.
                </p>
                <p className="text-slate-500 text-wrap break-all">
                  Data sourced from: <br></br>
                  https://www.pendle.gov.uk/download/meetings/id/26369/item_15_appendix_3#:~:text=for%20every%201%2C000%20litres%20of%20HVO%20burned,will%20produce%200.195%20tonnes%20CO2.
                </p>
                <p className="text-slate-500 break-all">
                  {" "}
                  https://www.mdpi.com/1996-1073/16/12/4785
                </p>
                <p className="text-slate-500 break-all">
                  https://car-emissions.com/cars/view/78378
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
