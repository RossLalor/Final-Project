import Image from "next/image";
import Link from 'next/link';

import { ClerkProvider, UserButton } from '@clerk/nextjs';
import Clerk from '@clerk/clerk-js';
import { SignIn } from "@clerk/nextjs";
import Navbar from "../components/Navbar";
import { collection, addDoc } from "firebase/firestore"; // Import the functions you need from the SDKs you need

export default function Home() {

  // add item to database

  // read items from database

  // delete items from database

  const addItem = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <>
    <main className=" min-h-screen min-w-screen bg-cover bg-[url('../images/background.svg')] relative">


      {/* The rest of the page content with a lower z-index to ensure it's under the UserButton */}
      <div className="glass backdrop-blur-[3px] min-h-screen z-0">
        <div className="flex justify-center center py-4">
          <h1 className="backdrop-blur-md bg-white/10 drop-shadow-lg font-extrabold sm:text-[3rem] py-2 px-4 max-w-4xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-center rounded-lg">
            <div className=" bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">Leccy Cars</div>  
            <div className="drop-shadow-lg text-xl py-2 px-2 max-w-4xl text-white">A site dedicated to informing people about electric cars</div>
          </h1>
        </div>
 
        

        <div className="flex justify-center py-10">
          <div className="flex flex-col backdrop-blur-md bg-white/10 p-4 items-center justify-center gap-3 ">
            <div>
              {/* <Button></Button> */}
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              <Link href={`/electricCars`}>Electric Cars</Link>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              {/* <button>Emissions</button> */}
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              <Link href={`/charts`}>Chart Page</Link>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              {/* <button>aaa</button> */}
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              {/* <button>aaa</button> */}
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              {/* <button>aaa</button> */}
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              {/* <button>aaa</button> */}
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              <Link href={`/userPage`}>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
