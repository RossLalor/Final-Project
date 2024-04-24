import React, { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  startAfter,
  DocumentData,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useUser } from "@clerk/nextjs";
import { QueryDocumentSnapshot } from "firebase/firestore";
import { format } from "date-fns";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDSPoV9ip_Ti5qDbRb6l8kQmaarmunRB-A",
  authDomain: "year4-final.firebaseapp.com",
  projectId: "year4-final",
  storageBucket: "year4-final.appspot.com",
  messagingSenderId: "616758389024",
  appId: "1:616758389024:web:bedbb56a6f128eb8698f45",
  measurementId: "G-P2W1S16X93",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function JourneyDataDisplay() {
  const { user } = useUser();
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [page, setPage] = useState(0); // For pagination (to be added)
  const [fuelCost, setFuelCost] = useState(""); // State to store the cost per liter
  const [electricCost, setElectricCost] = useState(""); // State to store the cost per liter

  interface Journey {
    id: string;
    carUsed?: string;
    averageConsumption?: string;
    distance?: string;
    fuelType?: string;
    dateAdded?: firebase.firestore.Timestamp;
  }

  useEffect(() => {
    const fetchJourneys = async () => {
      if (!user?.id) return;

      const journeyCollectionRef = collection(db, "users", user.id, "journeys");
      const baseQuery = query(
        journeyCollectionRef,
        orderBy("averageConsumption"),
        limit(10)
      );
      let paginatedQuery =
        page === 0
          ? baseQuery
          : query(
              journeyCollectionRef,
              orderBy("dateAdded", "desc"),
              startAfter(lastVisible),
              limit(10)
            );

      try {
        const querySnapshot = await getDocs(paginatedQuery);
        if (!querySnapshot.empty) {
          const fetchedJourneys = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setJourneys(fetchedJourneys);
          setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
          console.log("Fetched journeys:", fetchedJourneys);
        } else {
          console.log("No more journeys to fetch");
        }
      } catch (error) {
        console.error("Error fetching journeys: ", error);
      }
    };

    fetchJourneys();
  }, [user?.id, page]);

  const deleteJourney = async (journeyId: string) => {
    if (!user) {
      console.error("User is not defined");
      return;
    }
    const journeyDocRef = doc(db, "users", user.id, "journeys", journeyId);
    try {
      await deleteDoc(journeyDocRef);
      setJourneys(journeys.filter((journey) => journey.id !== journeyId));
      console.log("Journey deleted:", journeyId);
    } catch (error) {
      console.error("Error deleting journey: ", error);
    }
  };

  return (
    <div className="p-4 bg-slate-800 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-white font-bold text-2xl mb-4">
        Journey History / Information
      </h2>
      <div className="flex justify-between gap-4 mb-4">
        <input
          type="number"
          value={fuelCost}
          onChange={(e) => setFuelCost(e.target.value)}
          placeholder="Enter cost per liter of fuel"
          className="w-full p-2 bg-gray-700 text-white rounded"
        />
        <input
          type="number"
          value={electricCost}
          onChange={(e) => setElectricCost(e.target.value)}
          placeholder="Enter cost per kWh of electricity"
          className="w-full p-2 bg-gray-700 text-white rounded"
        />
      </div>
      <div className="space-y-4">
        {journeys.map((journey) => {
          let totalFuelOrEnergyUsed;
          let displayCost;

          if (journey.fuelType === "electric") {
            totalFuelOrEnergyUsed =
              journey.averageConsumption && journey.distance
                ? `${(
                    (parseFloat(journey.averageConsumption) *
                      parseFloat(journey.distance)) /
                    100
                  ).toFixed(2)} kWh`
                : "0 kWh";
            displayCost =
              journey.averageConsumption && electricCost && journey.distance
                ? `€${(
                    ((parseFloat(journey.averageConsumption) *
                      parseFloat(journey.distance)) /
                      100) *
                    parseFloat(electricCost)
                  ).toFixed(2)}`
                : null;
          } else {
            totalFuelOrEnergyUsed =
              journey.averageConsumption && journey.distance
                ? `${(
                    (parseFloat(journey.averageConsumption) / 100) *
                    parseFloat(journey.distance)
                  ).toFixed(2)} L`
                : "0 L";
            displayCost =
              journey.averageConsumption && fuelCost && journey.distance
                ? `€${(
                    (parseFloat(journey.averageConsumption) / 100) *
                    parseFloat(journey.distance) *
                    parseFloat(fuelCost)
                  ).toFixed(2)}`
                : null;
          }

          return (
            <div
              className="relative flex justify-between items-center p-4 bg-gray-700 rounded-lg shadow group"
              key={journey.id}
            >
              <div>
                <h3 className="text-xl font-medium text-gray-100">
                  {journey.carUsed || "Unknown Car"}
                </h3>
                <p className="text-gray-300 font-semibold">
                  Consumption:{" "}
                  <span className="font-normal">
                    {journey.averageConsumption || "N/A"}
                  </span>{" "}<span className="font-normal">
                  ({journey.fuelType === "electric" ? "kWh/100km" : "l/100km"})
                  </span>
                </p>
                <p className="text-gray-300 font-semibold">
                  Distance:{" "}
                  <span className="font-normal">
                    {journey.distance || "N/A"}
                  </span>{" "}<span className="font-normal">
                  km
                  </span>
                </p>
                <p className="text-gray-300 font-semibold">
                  Fuel type:{" "}
                  <span className="font-normal">
                    {journey.fuelType || "N/A"}
                  </span>
                </p>

                <p className="text-gray-300 font-semibold">
                  Date Added:{" "}
                  <span className="font-normal">
                    {journey.dateAdded
                      ? format(journey.dateAdded.toDate(), "PPpp")
                      : "N/A"}
                  </span>
                </p>
              </div>
              <div className="text-lg font-medium text-gray-200">
                <p>{totalFuelOrEnergyUsed}</p>
                {displayCost && <p>Cost: {displayCost}</p>}
              </div>
              <button
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold py-2 px-4 rounded"
                onClick={() => deleteJourney(journey.id)}
              >
                <IoTrashOutline />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
