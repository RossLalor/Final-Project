"use client";
import { useUser } from "@clerk/clerk-react";
import { useState, ChangeEvent } from "react";
import Link from "next/link";

// Define the shape of your form data using an interface
interface FormData {
  distance: string; // Using string to handle form field values, even for numbers
  fuelType: string;
  carUsed: string;
  averageConsumption: string;
}

export default function Home() {
  const { isSignedIn, user } = useUser();

  // Initialize state with the FormData interface
  const [formData, setFormData] = useState<FormData>({
    distance: '',
    fuelType: '',
    carUsed: '',
    averageConsumption: '',
  });

  // Handle form changes for both input and select elements
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Process your form data here
  };

  if (isSignedIn) {
    return (
      <main className="min-h-screen min-w-screen bg-cover bg-slate-900">
        <div className="backdrop-blur-[3px] min-h-screen">

          <div className="flex justify-center py-4">
            <div>
              <h1 className="backdrop-blur-md rounded-3xl bg-slate-800 drop-shadow-lg font-extrabold sm:text-[3rem] py-8 px-4 max-w-4xl text-white text-center">
                <div className="justify-center flex">
                  Greetings, {user?.firstName} <div className="px-4"><img className="rounded-3xl w-24 h-24justify-center flex "  src={user.imageUrl} alt="user image" /></div>
                </div>
              </h1>
            </div>
          </div>

          <div className="flex justify-center py-10">
            <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-3">
              <div className="p-4 bg-slate-800 rounded-lg shadow-lg hover:bg-slate-600 transition duration-300 text-white">
                <form onSubmit={handleSubmit}>
                  <h2 className="text-white font-bold text-2xl mb-4">Your Journey Details</h2>
                  <div className="mb-4">
                    <label htmlFor="distance" className="block text-sm font-medium text-gray-300">Distance (km)</label>
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
                    <label htmlFor="fuelType" className="block text-sm font-medium text-gray-300">Fuel Type</label>
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
                    <label htmlFor="carUsed" className="block text-sm font-medium text-gray-300">Car Used</label>
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
                    <label htmlFor="averageConsumption" className="block text-sm font-medium text-gray-300">Average Consumption (L/100km)</label>
                    <input
                      type="number" // type="number" can be used for better input control, but kept as text for simplicity
                      name="averageConsumption"
                      id="averageConsumption"
                      value={formData.averageConsumption}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0"
                    />
                  </div>
                  <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg font-bold text-white">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}