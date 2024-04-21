export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-18 py-10">
          <div className="flex justify-center py-4">
            <h1 className="text-4xl sm:text-6xl h-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              About Leccy Cars
            </h1>
          </div>

          <div className="flex justify-center py-10">
            <div className="">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <div className="font-semibold cursor-pointer">
                  What is this site about?
                </div>
                <p className="text-gray-400 mt-2">
                  This site aims to answer a question which doesn&apos;t seem to have a definitive answer: Are electric cars really better for the environment than petrol cars? Also, should you buy one? The answers to these questions will be explored using research data, ai, information the author has gathered and information that fellow users have left about their experiences with their cars.                
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}