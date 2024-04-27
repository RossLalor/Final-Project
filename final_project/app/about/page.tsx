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
                  Leccy cars (slang for Electric Cars) is a site that aims to
                  answer a couple of research questions, namely: Do electric
                  cars have any tangible benefits to air quality and are there
                  any safety risks associated with their widespread adoption?
                  These questions will be answered by the author using research
                  data, AI and information that users have left about their
                  cars.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-10">
            <div className="">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <div className="font-semibold cursor-pointer">About me:</div>
                <p className="text-gray-400 mt-2">
                  My name is Ross, Student number B00137935. This is something
                  I&apos;ve been wanting to build for a while now but never had
                  the motivation. I&apos;ve been interested in cars since a very
                  young age, how they work, what makes them good, bad or tick
                  and the recent push to electric cars has been bothersome to me
                  for a number of reasons. First of all, the technology is not
                  quite there yet and has been having teething problems
                  discussed in this site. Second of all, the price is still very
                  much not there yet as the technology is still too new and
                  developing. Third of all, the infrastructure is simply not
                  there (at least in Ireland where I live). I could make another
                  site documenting my complaints about everything though not
                  just electric cars so I digress. I hope you enjoy your
                  navigation throughout the site I have made. This semester has
                  put me in the most jaded possible state I have ever been in in
                  my life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
