"use client";
import * as React from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { constant } from "lodash";
import { defined } from "chart.js/helpers";
import { useUser } from "@clerk/nextjs";
import { ChangeEvent, useState } from "react";

interface FormData {
  distance: string; // Using string to handle form field values, even for numbers
  fuelType: string;
  carUsed: string;
  averageConsumption: string;
}

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

// DongieWongies component
export default function DongieWongies() {
  const { user } = useUser();

  // State for form data
  const [formData, setFormData] = useState<FormData>({
    distance: "",
    fuelType: "",
    carUsed: "",
    averageConsumption: "",
  });

  // Handle change in form inputs
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user?.id) {
      const journeyCollectionRef = collection(db, "users", user.id, "journeys");

      try {
        const docRef = await addDoc(journeyCollectionRef, formData);
        console.log("Journey document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding journey document: ", error);
      }
    } else {
      console.error("No user ID found, cannot write to Firestore");
    }
  };

  // UseEffect for user data
  React.useEffect(() => {
    async function addUserData() {
      if (user?.id) {
        const userDocRef = doc(db, "users", user.id);
        const userData = {
          name: user.firstName,
          email: user.emailAddresses[0].emailAddress,
        };

        try {
          await setDoc(userDocRef, userData, { merge: true });
          console.log("User document written with ID: ", user.id);
        } catch (e) {
          console.error("Error adding user document: ", e);
        }
      }
    }

    addUserData();
  }, [user]);

  // Return your component's JSX or null if not needed
  return (
    <div className="flex justify-center py-10">
      <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-3">
        <div className="p-4 bg-slate-800 rounded-lg shadow-lg hover:bg-slate-600 transition duration-300 text-white">
          <form onSubmit={handleSubmit}>
            <h2 className="text-white font-bold text-2xl mb-4">
              Your Journey Details
            </h2>
            <div className="mb-4">
              <label
                htmlFor="distance"
                className="block text-sm font-medium text-gray-300"
              >
                Distance (km)
              </label>
              <input
                type="number" // type="number" can be used for better input control, but kept as text for simplicity
                name="distance"
                id="distance"
                value={formData.distance}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="fuelType"
                className="block text-sm font-medium text-gray-300"
              >
                Fuel Type
              </label>
              <select
                name="fuelType"
                id="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0"
              >
                <option value="">Select Fuel Type</option>
                <option value="electric">Electric</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="carUsed"
                className="block text-sm font-medium text-gray-300"
              >
                Car Used
              </label>
              <input
                type="text"
                name="carUsed"
                id="carUsed"
                value={formData.carUsed}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="averageConsumption"
                className="block text-sm font-medium text-gray-300"
              >
                Average Consumption (L/100km)
              </label>
              <input
                type="number" // type="number" can be used for better input control, but kept as text for simplicity
                name="averageConsumption"
                id="averageConsumption"
                value={formData.averageConsumption}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg font-bold text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
