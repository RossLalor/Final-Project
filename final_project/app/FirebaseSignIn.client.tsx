"use client";
// FirebaseSignIn.client.tsx
import { useAuth, useUser } from '@clerk/nextjs';
import './firebase'; // This is where Firebase is initialized
import { getAuth, signInWithCustomToken } from 'firebase/auth';
import { useEffect } from 'react';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDSPoV9ip_Ti5qDbRb6l8kQmaarmunRB-A",
  authDomain: "year4-final.firebaseapp.com",
  projectId: "year4-final",
  storageBucket: "year4-final.appspot.com",
  messagingSenderId: "616758389024",
  appId: "1:616758389024:web:bedbb56a6f128eb8698f45",
  measurementId: "G-P2W1S16X93",
};

const FirebaseSignIn = () => {
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();
  const { user } = useUser();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  useEffect(() => {
    const signInWithFirebase = async () => {
      if (isSignedIn) {
        try {
          const token = await getToken({ template: 'integration_firebase' });
          if (token) {
            const auth = getAuth();
            await signInWithCustomToken(auth, token);
            console.log('Signed in with Firebase');
            if (user?.id) {
              const userId = user.id; // Clerk user ID
              const userData = {
                name: user.firstName,
                email: user.emailAddresses[0].emailAddress,
              };
      
              const userDocRef = doc(db, "users", userId); // Use Clerk user ID as the document ID
      
              try {
                await setDoc(userDocRef, userData, { merge: true }); // Use merge to not overwrite existing fields
                console.log("Document written with ID: ", userId);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
            }
          } else {
            console.error('Token is null');
          }
        } catch (error) {
          // Handle any errors here
          console.error('Error signing in with Firebase:', error);
        }
      }
    };

    signInWithFirebase();
  }, [isSignedIn, getToken, user?.emailAddresses, user?.firstName, user?.id]);

  // This component doesn't render anything, but you could return a spinner or any other
  // indicator of the sign-in process if desired.
  return null;
};

export default FirebaseSignIn;
