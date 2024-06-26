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
  dateAdded: Date;
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
export default function DongieWongies({ onAddSuccess }: { onAddSuccess: () => void }) {
  const { user } = useUser();

  // State for form data
  const [formData, setFormData] = useState<FormData>({
    distance: "",
    fuelType: "",
    carUsed: "",
    averageConsumption: "",
    dateAdded: new Date(),
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

    const newData = {
      ...formData,
      dateAdded: new Date() // Capture the current date and time at submission
    };

    if (user?.id) {
      const journeyCollectionRef = collection(db, "users", user.id, "journeys");

      try {
        const docRef = await addDoc(journeyCollectionRef, formData);
        alert("Journey document written to database");
        setFormData({
          distance: "",
          fuelType: "",
          carUsed: "",
          averageConsumption: "",
          dateAdded: new Date(),
        });
        onAddSuccess();  // Call the passed function to notify of success        
        
      } catch (error) {
        console.error("Error adding journey document: ", error);
        alert("An error occured, please try again or contact the developer");
      }
    } else {
      console.error("No user ID found, cannot write to Firestore");
      alert("No user ID found, cannot write to Firestore");
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


  return (
    <div className="flex justify-center py-10 ">
      <div className="w-full gap-3">
        <div className="p-4 bg-slate-800 rounded-lg shadow-lg">
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
                type="number"
                step={0.1}
                maxLength={6}
                name="distance"
                id="distance"
                value={formData.distance}
                onChange={handleChange}
                required
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
                required
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0"
              >
                <option value="">Select Fuel Type</option>
                <option value="Electric">Electric</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
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
                maxLength={36}
                name="carUsed"
                id="carUsed"
                value={formData.carUsed}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="averageConsumption"
                className="block text-sm font-medium text-gray-300"
              >
                Average Consumption ({formData.fuelType === "Electric" ? "kWh/100km" : "l/100km"})
              </label>
              <input
                type="number"
                step="0.1"
                maxLength={4}
                name="averageConsumption"
                id="averageConsumption"
                value={formData.averageConsumption}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0"
              />
            </div>
            <div className="flex justify-center ">
            <button
              type="submit"
              className="px-4 py-2 bg-slate-500 hover:bg-slate-400 rounded-lg font-bold text-white w-[24vh] transition: hover:scale-105 duration-300"
            >
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
