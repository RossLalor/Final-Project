"use client";
import { useUser } from "@clerk/clerk-react";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import dingleDang from "../firebaseAddData";
import DongieWongies from "../components/firebaseAddData";
import JourneyDataDisplay from "../components/firebaseGetData";
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

export default function Home() {
  const { isSignedIn, user } = useUser();
  const [refreshKey, setRefreshKey] = useState(0); // refresh key to trigger updates

  const handleRefreshJourneys = () => {
    setRefreshKey((prevKey) => prevKey + 1); // increment key to trigger effect
  };

  if (isSignedIn) {
    return (
      <main className="min-h-screen min-w-screen bg-cover bg-slate-900">
        <div className="backdrop-blur-[3px] min-h-screen">
          <div className="flex justify-center py-4">
            <div>
              <h1 className="text-4xl sm:text-6xl h-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-400 to-blue-600">
                <div className="justify-center flex">
                  Greetings, {user?.firstName}{" "}
                  <div className="px-4">
                    <img
                      className="rounded-3xl w-24 justify-center flex "
                      src={user.imageUrl}
                      alt="user image"
                    />
                  </div>
                </div>
              </h1>
              <DongieWongies onAddSuccess={handleRefreshJourneys} />
              <JourneyDataDisplay key={refreshKey} />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
