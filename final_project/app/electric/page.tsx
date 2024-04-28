export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-18 py-10 w-full">
          <div className="flex justify-center py-4">
            <h1 className="text-4xl sm:text-6xl h-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              Leccy Cars
            </h1>
          </div>

          <div className="flex justify-center py-10">
            <div className="w-full">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <div className="font-semibold cursor-pointer text-center text-2xl">
                  Are Electric Cars Really Better for the Environment?
                </div>
                <p className="text-gray-400 mt-2 text-center justify text-balance">
                  This is a question that gets thrown around a lot as of late
                  and many people are spouting different answers. This area of
                  the site will attempt to answer some commonly held
                  misconceptions and misinformation surrounding electric cars
                  and get some easy and quick to read answers to some popular
                  questions.
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 mt-8">
                <div className="lg:flex-row flex-wrap flex">
                  <div className="lg:w-5/6">
                    <div className="font-semibold cursor-pointer text-xl">
                      Do Electric cars have a tangible benefit to air quality?
                    </div>
                    <p className="text-gray-400 mt-2 justify text-balance">
                      While there is no doubt that electric cars are better for
                      the immediate viscinity, the question of whether they are
                      better for the environment as a whole is still largely up
                      for debate. For starters, lithium batteries will only last
                      around 10 years before needing to be replaced.* The mining
                      of the precious metals needed to construct the batteries
                      is in itself a filthy business with many environmental and
                      humanatarian concerns. With this in mind, they still pose
                      an overall benefit to the environment as they are not
                      directly emitting harmful gases into the atmosphere, but
                      this is effectively moving the emissions (albeit less of
                      them) to a different place on the planet.
                    </p>
                  </div>
                  <div className="w-full p-12 lg:w-1/6 text-center justify-center flex items-center text-6xl font-bold">
                    YES*
                  </div>
                </div>
                <p className="text-gray-500 text-wrap break-all">
                  *
                  https://www.caranddriver.com/research/a31875141/electric-car-battery-life/
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 mt-8">
                <div className="lg:flex-row flex-wrap flex">
                  <div className="lg:w-5/6">
                    <div className="font-semibold cursor-pointer text-xl">
                      Are they safer?
                    </div>
                    <p className="text-gray-400 mt-2 justify text-balance">
                      Electric cars are generally safer than their petrol
                      counterparts. This is due to the fact that they have less
                      moving parts and are generally heavier. While this makes
                      their handling worse than lighter petrol based vehicles,
                      the added mass does help to reduce the impact to the
                      passengers inside in the event of an accident. They are
                      also less likely to catch fire in the event of an
                      accident, however, if they do catch fire in an accident,
                      they are MUCH more difficult to extinguish as lithium ion
                      batteries are prone to an effect called thermal runaway.*
                      This occurs due to lithium being an incredibly unstable
                      mineral and all it takes is some oxygen to make them catch
                      fire. This is why you may have heard of electric cars that
                      have caught fire and burned for days on end. This is a
                      very rare occurance, but it is a risk that is present with
                      electric cars. Fossil fuel cars on the other hand are much
                      easier to extinguish in the event of a fire.
                    </p>
                  </div>
                  <div className="w-full p-12 lg:w-1/6 text-center justify-center flex items-center text-6xl font-bold">
                    YES*
                  </div>
                </div>
                <p className="text-gray-500 text-wrap break-all">
                  *https://www.sciencedirect.com/science/article/pii/S2590174522001337#:~:text=The%20thermal%20runaway%20of%20lithium,the%20failure%20of%20the%20battery.
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 mt-8">
                <div className="lg:flex-row flex-wrap flex">
                  <div className="lg:w-5/6">
                    <div className="font-semibold cursor-pointer text-xl">
                      Are they more efficient?
                    </div>
                    <p className="text-gray-400 mt-2 justify text-balance">
                      The answer to this question is a resounding yes. Electric
                      motors are a much more efficient method of transferring
                      energy from storage (such as a battery) into kinetic
                      energy to push a car along. This is due to the fact that
                      electric motors are much simpler than internal combustion
                      engines and have far fewer moving parts. This means that
                      there is less energy lost to heat and sound and more
                      energy is transferred to the wheels. This is why electric
                      cars are able to achieve such high efficiency ratings and
                      why they are so much cheaper to run than their petrol
                      counterparts. Electric cars can convert up to 77 percent
                      of the energy from the battery into movement, whereas
                      petrol engines can only convert up to around 30 percent.*
                      The only thing to note with this is that if you use
                      electricity generated from a dirty source such as a coal
                      power plant, the offset in carbon emissions is not as high
                      as it would be if you used entirely green electricity.
                    </p>
                  </div>
                  <div className="w-full p-12 lg:w-1/6 text-center justify-center flex items-center text-6xl font-bold">
                    YES
                  </div>
                </div>
                <p className="text-gray-500 text-wrap break-all">
                  *https://www.fueleconomy.gov/feg/evtech.shtml#:~:text=Energy%20efficient.,to%20power%20at%20the%20wheels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
