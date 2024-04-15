import Image from "next/image";
// import "../app/globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <header className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            Leccy Cars Innit ®️
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mt-4">
            Embracing Sustainable Mobility for a Greener Tomorrow
          </p>
        </header>

        <section className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">SDG GOAL 7</h2>
              <p className="text-gray-400">
                Sustainable Development Goal 7 aims to ensure access to
                affordable, reliable, sustainable, and modern energy for all. It
                is crucial for economic development, poverty alleviation, and
                the wellbeing of people globally.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-96 h-48 bg-gray-700 rounded flex items-center justify-center overflow-hidden ">
                  <div className="inline-block rounded-xl sm:text-[3.5rem] px-32 py-32 bg-[url('../images/wuh.png')] bg-cover transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"></div>
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
                <div className="w-48 h-48 bg-gray-700 flex items-center justify-center overflow-hidden ">
                  <div className="inline-block rounded-xl sm:text-[3.5rem] w-full h-full bg-[url('../images/SDG12.svg')] bg-cover transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"></div>
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
                <div className="w-48 h-48 bg-gray-700 rounded-full flex items-center justify-center"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Explore More</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Placeholder for additional content blocks */}
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <h3 className="font-semibold">Topic Placeholder</h3>
                <p className="text-gray-400 mt-2">
                  Brief description or introduction to the topic.
                </p>
                {/* Placeholder for an image */}
                <div className="mt-3 bg-gray-700 h-32 rounded-md flex items-center justify-center">
                  <span>Image Placeholder</span>
                </div>
              </div>
              {/* Repeat the above block for more topics */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
