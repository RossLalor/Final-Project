export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-slate-900 text-white">
        {/* Adjusted container class to center and take up 75% of the screen width */}
        <div className="container mx-auto px-4 py-10 w-full max-w-[75%]">
          <div className="flex justify-center py-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              Leccy Cars
            </h1>
          </div>

          <div className="flex justify-center py-10">
            <div className="">
              {/* Each block can be adapted from the examples below */}
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <div className="font-semibold cursor-pointer">
                  What is this site about?
                </div>
                <p className="text-gray-400 mt-2">
                  This site is dedicated to informing people about electric cars and their benefits / downsides. We also provide information about the environmental impact of electric cars and how they can help reduce pollution.
                </p>
              </div>

              {/* Additional blocks for other content can be added here following the same structure */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}