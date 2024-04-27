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

// To get access to the firebase database
const firebaseConfig = {
  apiKey: "AIzaSyDSPoV9ip_Ti5qDbRb6l8kQmaarmunRB-A",
  authDomain: "year4-final.firebaseapp.com",
  projectId: "year4-final",
  storageBucket: "year4-final.appspot.com",
  messagingSenderId: "616758389024",
  appId: "1:616758389024:web:bedbb56a6f128eb8698f45",
  measurementId: "G-P2W1S16X93",
};

// Initialize the app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to display the journey data
export default function JourneyDataDisplay() {
  // Defining all of the constants and states
  const { user } = useUser();
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [firstVisible, setFirstVisible] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null); // State to store the first visible document
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null); // State to store the last visible document
  const [page, setPage] = useState(0); // For pagination
  const [fuelCost, setFuelCost] = useState(""); // State to store the cost per liter
  const [electricCost, setElectricCost] = useState(""); // State to store the cost per KWH
  const [refetchTrigger, setRefetchTrigger] = useState(0); // New state to trigger refetch
  const [hasMorePages, setHasMorePages] = useState(true); // New state to manage page availability

  // Initialize docSnaps as an empty array
  const [pageSnapshots, setPageSnapshots] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);

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
      let paginatedQuery;

      if (page === 0) {
        paginatedQuery = query(
          journeyCollectionRef,
          orderBy("dateAdded", "desc"),
          limit(5)
        );
      } else {
        const snap = pageSnapshots[page];
        if (snap) {
          paginatedQuery = query(
            journeyCollectionRef,
            orderBy("dateAdded", "desc"),
            startAfter(snap),
            limit(5)
          );
        }
      }

      try {
        if (paginatedQuery) {
          const querySnapshot = await getDocs(paginatedQuery);
          if (!querySnapshot.empty) {
            setJourneys(
              querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) // Map the data to the journey object
            );
            setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]); // Set the last visible document
            setFirstVisible(querySnapshot.docs[0]); // Set the first visible document
            // Maintain the snapshot history for pagination
            const newSnapshots = [...pageSnapshots];
            newSnapshots[page + 1] =
              querySnapshot.docs[querySnapshot.docs.length - 1];
            setPageSnapshots(newSnapshots);
            // Determine if there are more pages
            setHasMorePages(querySnapshot.docs.length === 5);
          } else {
            setHasMorePages(false); // No more data to fetch
          }
        }
      } catch (error) {
        console.error("Error fetching journeys: ", error); // when booboo happens
      }
    };

    fetchJourneys();
  }, [user?.id, page, refetchTrigger]); // Added refetchTrigger as a dependency

  const deleteJourney = async (journeyId: string) => {
    if (!user) {
      console.error("User is not defined");
      return;
    }
    const journeyDocRef = doc(db, "users", user.id, "journeys", journeyId);
    try {
      await deleteDoc(journeyDocRef);
      console.log("Journey deleted:", journeyId);
      setRefetchTrigger((prev) => prev + 1); // Trigger a refetch
    } catch (error) {
      console.error("Error deleting journey: ", error);
    }
  };

  // Functions for the next and previous buttons
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
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

          // parseFloat used to convert strings to floating point numbers
          if (journey.fuelType === "Electric") {
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
                  </span>{" "}
                  <span className="font-normal">
                    ({journey.fuelType === "electric" ? "kWh/100km" : "l/100km"}
                    )
                  </span>
                </p>
                <p className="text-gray-300 font-semibold">
                  Distance:{" "}
                  <span className="font-normal">
                    {journey.distance || "N/A"}
                  </span>{" "}
                  <span className="font-normal">km</span>
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
      <div>
        <button
          onClick={prevPage}
          disabled={page === 0}
          className="mr-2 py-2 px-4 bg-gray-500 text-white rounded disabled:bg-gray-700"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={!hasMorePages || journeys.length < 5}
          className="py-2 px-4 bg-gray-500 text-white rounded disabled:bg-gray-700"
        >
          Next
        </button>
      </div>
    </div>
  ); // Buttons to trigger the pagination scripts above
}
