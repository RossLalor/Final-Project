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

  interface Journey {
    id: string;
    carUsed?: string;
    averageConsumption?: string;
    distance?: string;
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
              orderBy("createdAt", "desc"),
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
  }, [user?.id, page]); // Dependency array to run the effect when `user` or `page` changes

  // Delete journey function
  const deleteJourney = async (journeyId: string) => {
    if (!user) {
      console.error("User is not defined");
      return; // Exit the function if user is not defined
    }
    const journeyDocRef = doc(db, "users", user.id, "journeys", journeyId);
    try {
      await deleteDoc(journeyDocRef);
      setJourneys(journeys.filter((journey) => journey.id !== journeyId)); // Update the state to reflect the deletion
      console.log("Journey deleted:", journeyId);
    } catch (error) {
      console.error("Error deleting journey: ", error);
    }
};
return (
  <div className="p-4 bg-slate-800 rounded-lg shadow-md max-w-4xl mx-auto">
    <h2 className="text-white font-bold text-2xl mb-4">Journey History / Information</h2>
    <div className="space-y-4">
      {journeys.map(journey => {
        const totalFuelUsed = journey.averageConsumption && journey.distance 
          ? (parseFloat(journey.averageConsumption) / 100) * parseFloat(journey.distance)
          : 0;

        return (
          <div
            className="relative flex justify-between items-center p-4 bg-gray-700 rounded-lg shadow group"
            key={journey.id}
          >
            <div>
              <h3 className="text-xl font-medium text-gray-100">{journey.carUsed || 'Unknown Car'}</h3>
              <p className="text-gray-300">
                Consumption: <span className="font-semibold">{journey.averageConsumption || 'N/A'}</span> L/100km
              </p>
              <p className="text-gray-300">
                Distance: <span className="font-semibold">{journey.distance || 'N/A'}</span> km
              </p>
            </div>
            <div className="text-lg font-medium text-gray-200">
              <p>{totalFuelUsed.toFixed(2)} L</p>
            </div>
            <button
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity  text-white font-bold py-2 px-4 rounded"
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
