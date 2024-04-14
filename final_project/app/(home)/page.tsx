import Image from "next/image";
import Link from "next/link";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import Clerk from "@clerk/clerk-js";
import { SignIn } from "@clerk/nextjs";
import Navbar from "../components/Navbar";
import { collection, addDoc } from "firebase/firestore";



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
            <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
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
                      Electric Cars
                    </div>

                    <p className="text-gray-400 mt-2">
                      Information about Electric Cars.
                    </p>
                  </div>
                </Link>
                {/* Example for another link */}
                <Link href={`/charts`}>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                    <div className="font-semibold cursor-pointer">
                      Chart Page
                    </div>
                    <p className="text-gray-400 mt-2">
                      Explore various charts related to electric cars.
                    </p>
                  </div>
                </Link>

                <Link href={`/userPage`}>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                    <div className="font-semibold cursor-pointer">
                      Diary Page
                    </div>
                    <p className="text-gray-400 mt-2">
                      Your user-specific homepage.
                    </p>
                  </div>
                </Link>

                <Link href={`/about`}>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                    <div className="font-semibold cursor-pointer">
                      About Page
                    </div>

                    <p className="text-gray-400 mt-2">
                      What is the point of this application? Find out here!
                    </p>
                  </div>
                </Link>
                {/* More blocks can be added for other pages */}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
