"use client";
import * as React from "react";
import { getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { constant } from "lodash";
import { defined } from "chart.js/helpers";
import { useUser } from "@clerk/nextjs";


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

export default function dingleDang() {
  const { user } = useUser();

  React.useEffect(() => {
    async function addData() {
      // Check if the Clerk user is loaded and has an ID
      if (user?.id) {
        const userId = user.id; // Clerk user ID
        const userData = {
          name: user.firstName,
          email: user.emailAddresses[0].emailAddress,
          age: 144,
        };

        const userDocRef = doc(db, "users", userId); // Use Clerk user ID as the document ID

        try {
          await setDoc(userDocRef, userData, { merge: false }); // Use merge to not overwrite existing fields
          console.log("Document written with ID: dineldongies ", userId);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    }

    addData();
  }, [user]); // Dependency array to run the effect when `user` changes

  // Return your component's JSX or null if not needed
  return null;
}

