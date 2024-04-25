import Image from "next/image";
// import "../app/globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <header className="text-center">
          <h1 className="text-4xl sm:text-6xl h-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-400 to-blue-600">
            SDG Goals
          </h1>
        </header>

        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
          <div className="font-semibold cursor-pointer">
            What are SDG Goals and how do they apply to this site?
          </div>
          <p className="text-gray-400 mt-2">
            SDG Goals or (Sustainable Development Goals) are a collection of 17
            global goals set by the United Nations General Assembly in 2015 for
            the year 2030. The goals are broad and interdependent, yet each has
            a separate list of targets to achieve. This site aims to explore the
            relationship between electric cars and the following SDG Goals: 7,
            12, and 13.
          </p>
        </div>
        <section className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">SDG GOAL 7</h2>
              <p className="text-gray-400">
                Sustainable Development Goal 7 aims to ensure access to
                affordable, reliable, sustainable, and modern energy for all. It
                is crucial for economic development, poverty alleviation, and
                the wellbeing of people globally.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-48 h-48 bg-gray-700 flex rounded items-center justify-center overflow-hidden ">
                  <div className="inline-block sm:text-[3.5rem] w-full h-full bg-[url('../images/SDG7.svg')] bg-cover transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">SDG GOAL 12</h2>
              <p className="text-gray-400">
                SDG Goal 12 focuses on ensuring sustainable consumption and
                production patterns. It emphasizes the importance of resource
                efficiency, reducing waste generation, and promoting sustainable
                practices.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-48 h-48 bg-gray-700 rounded flex items-center justify-center overflow-hidden ">
                  <div className="inline-block sm:text-[3.5rem] w-full h-full bg-[url('../images/SDG12.svg')] bg-cover transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">SDG GOAL 13</h2>
              <p className="text-gray-400">
                SDG Goal 13 focuses on taking urgent action to combat climate
                change and its impacts. It highlights the need for resilience,
                adaptive capacity, and integrating climate change measures into
                policies and planning.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-48 h-48 bg-gray-700 rounded flex items-center justify-center overflow-hidden ">
                  <div className="inline-block sm:text-[3.5rem] w-full h-full bg-[url('../images/SDG13.svg')] bg-cover transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
