import Image from "next/image";
import Link from "next/link";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import Clerk from "@clerk/clerk-js";
import { SignIn } from "@clerk/nextjs";
import Navbar from "../components/Navbar";
import { collection, addDoc } from "firebase/firestore";
import { IoBarChart } from "react-icons/io5";
import { HiLightningBolt, HiQuestionMarkCircle } from "react-icons/hi";
import { FaBook } from "react-icons/fa";
import { TbListDetails, Tb3DCubeSphere } from "react-icons/tb";
import { LuFuel } from "react-icons/lu";
import { RxLightningBolt } from "react-icons/rx";


export default function Home() {
  // add item to database
  // read items from database
  // delete items from database

  const addItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <main className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-10">
          <header className="text-center">
            <h1 className="text-4xl sm:text-6xl h-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              Leccy Cars
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mt-4">
              A site dedicated to informing people about electric cars
            </p>
          </header>

          <section className="mt-12">
            <div className="flex justify-center py-10">
              <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-6 ">
                <Link href={`/electricCars`}>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                    <div className="font-semibold cursor-pointer">
                      <div className="flex flex-inline gap-1">
                        <HiLightningBolt />
                        SDG Page
                      </div>
                    </div>

                    <p className="text-gray-400 mt-2">
                      Information about SDG Goals and which ones apply to this
                      site.
                    </p>
                  </div>
                </Link>
                {/* Example for another link */}
                <Link href={`/charts`}>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                    <div className="font-semibold cursor-pointer">
                      <div className="flex flex-inline gap-1">
                        <IoBarChart />
                        Air Quality Index Page
                      </div>
                    </div>
                    <p className="text-gray-400 mt-2">
                      Wanna see how healthy the air quality is in a city near
                      you? Check it here!
                    </p>
                  </div>
                </Link>

                <Link href={`/Research`}>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                    <div className="font-semibold cursor-pointer">
                      <div className="flex flex-inline gap-1">
                        <TbListDetails />
                        Research Page
                      </div>
                    </div>
                    <p className="text-gray-400 mt-2">
                      Technical details of emissions and vehicles.
                    </p>
                  </div>
                </Link>

                <Link href={`/wander`}>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                    <div className="font-semibold cursor-pointer">
                      <div className="flex flex-inline gap-1">
                        <Tb3DCubeSphere />
                        3D Model Viewer
                      </div>
                    </div>
                    <p className="text-gray-400 mt-2">
                      3D models of various things (fast internet recommended)
                    </p>
                  </div>
                </Link>

                <Link href={`/userPage`}>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                    <div className="font-semibold cursor-pointer">
                      <div className="flex flex-inline gap-1">
                        <FaBook /> Diary Page
                      </div>
                    </div>
                    <p className="text-gray-400 mt-2">
                      Your user-specific homepage.
                    </p>
                  </div>
                </Link>

                <Link href={`/about`}>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                    <div className="font-semibold cursor-pointer">
                      <div className="flex flex-inline gap-1">
                        <HiQuestionMarkCircle />
                        About Page
                      </div>
                    </div>

                    <p className="text-gray-400 mt-2">
                      What is the point of this application? Find out here!
                    </p>
                  </div>
                </Link>
                <Link href={`/hvo`}>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                    <div className="font-semibold cursor-pointer">
                      <div className="flex flex-inline gap-1">
                        <LuFuel />
                        HVO
                      </div>
                    </div>

                    <p className="text-gray-400 mt-2">
                      What is HVO and how could it be a game changer?
                    </p>
                  </div>
                </Link>
                <Link href={`/electric`}>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                    <div className="font-semibold cursor-pointer">
                      <div className="flex flex-inline gap-1">
                      <RxLightningBolt />
                        Should you go Electric?
                      </div>
                    </div>

                    <p className="text-gray-400 mt-2">
                      What are the benefits of going electric?
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
