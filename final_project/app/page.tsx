import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-cover bg-[url('../images/background.svg')]">
      <div className="backdrop-blur-[3px] min-h-screen">
      <div className="flex justify-center py-4">
        <h1 className=" backdrop-blur-md bg-white/10 drop-shadow-lg font-extrabold sm:text-[3rem] py-8 px-4 max-w-4xl text-white">
          Leccy cars innit ®️
        </h1>
      </div>

      <div className="flex justify-center py-10">
        <div className="flex flex-col backdrop-blur-md bg-white/10 items-center justify-center gap-3 ">
          <div className="w-full text-gray-700 text-center bg-red-400 hover:-translate-y-0 hover:scale-90 duration-100">
            <button>SDG Goals</button>
          </div>
          <div className="w-full text-gray-700 text-center bg-gray-400 py-4 hover:-translate-y-0 hover:scale-90 duration-100">
            <button>Electric Cars</button>
          </div>
          <div className="text-gray-700 text-center bg-orange-400  hover:-translate-y-0 hover:scale-90 duration-100">
            <button>Emissions</button>
          </div>
          <div>
            <button className="text-gray-700 text-center bg-amber-400  hover:-translate-y-0 hover:scale-90 duration-100">aaa</button>
          </div>
          <div className="text-gray-700 text-center bg-teal-400  hover:-translate-y-0 hover:scale-90 duration-100">
            <button>aaa</button>
          </div>
          <div className="text-gray-700 text-center bg-cyan-400  hover:-translate-y-0 hover:scale-90 duration-100">
            <button>aaa</button>
          </div>
          <div className="text-gray-700 text-center bg-orange-900  hover:-translate-y-0 hover:scale-90 duration-100">
            <button>aaa</button>
          </div>
          <div className="text-gray-700 text-center bg-purple-900  hover:-translate-y-0 hover:scale-90 duration-100">
            <button>aaa</button>
          </div>
          <div className="text-gray-700 text-center bg-blue-400  hover:-translate-y-0 hover:scale-90 duration-100">
            <button>aaa</button>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
