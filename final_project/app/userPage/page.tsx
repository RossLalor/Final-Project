"use client";
import { useUser } from "@clerk/clerk-react";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import dingleDang from "../firebaseAddData";
import DongieWongies from "../components/firebaseAddData";

// Define the shape of your form data using an interface


export default function Home() {
  const { isSignedIn, user } = useUser();




  if (isSignedIn) {
    return (
      <main className="min-h-screen min-w-screen bg-cover bg-slate-900">
        <div className="backdrop-blur-[3px] min-h-screen">

          <div className="flex justify-center py-4">
            <div>
              <h1 className="backdrop-blur-md rounded-3xl bg-slate-800 drop-shadow-lg font-extrabold sm:text-[3rem] py-8 px-4 max-w-4xl text-white text-center">
                <div className="justify-center flex">
                  Greetings, {user?.firstName} <div className="px-4"><img className="rounded-3xl w-24 h-24justify-center flex "  src={user.imageUrl} alt="user image" /></div>
                  <DongieWongies />
                </div>
              </h1>
            </div>
          </div>

        </div>
      </main>
    );
  }
}