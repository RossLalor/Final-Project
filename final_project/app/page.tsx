import Image from "next/image";
import Link from 'next/link';
import Button from './button';
import { ClerkProvider, UserButton } from '@clerk/nextjs';
import Clerk from '@clerk/clerk-js';
import Signin from "./signin";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
    <Navbar /> {/* Include the Navbar at the top */}
    <main className="min-h-screen min-w-screen bg-cover bg-[url('../images/background.svg')] relative">
      {/* Ensure the UserButton is clickable and on top of all other elements */}
      <div className="absolute top-0 right-0 p-4 z-10">
        <UserButton afterSignOutUrl="/sign-out" />
      </div>

      {/* The rest of the page content with a lower z-index to ensure it's under the UserButton */}
      <div className="backdrop-blur-[3px] min-h-screen z-0">
        <div className="flex justify-center py-4">
          <h1 className="backdrop-blur-md bg-white/10 drop-shadow-lg font-extrabold sm:text-[3rem] py-8 px-4 max-w-4xl text-white">
            Leccy cars innit ®️
          </h1>
        </div>
        

        <div className="flex justify-center py-10">
          <div className="flex flex-col backdrop-blur-md bg-white/10 p-4 items-center justify-center gap-3 ">
            <div>
              <Button></Button>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              <button>Electric Cars</button>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              <button>Emissions</button>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              <button>aaa</button>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              <button>aaa</button>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              <button>aaa</button>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              <button>aaa</button>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              <button>aaa</button>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-center w-full rounded-full">
              <Signin></Signin>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
