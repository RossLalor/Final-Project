"use client";
// FirebaseSignIn.client.tsx
import { useAuth, useUser } from '@clerk/nextjs';
import './firebase'; // This is where Firebase is initialized
import { getAuth, signInWithCustomToken } from 'firebase/auth';
import { useEffect } from 'react';

const FirebaseSignIn = () => {
  const { isSignedIn } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    const signInWithFirebase = async () => {
      if (isSignedIn) {
        try {
          const token = await getToken({ template: 'integration_firebase' });
          if (token) {
            const auth = getAuth();
            await signInWithCustomToken(auth, token);
            console.log('Signed in with Firebase thank fuck');
            // User is now signed in to Firebase, you can perform any post sign-in actions here
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
  }, [isSignedIn, getToken]);

  // This component doesn't render anything, but you could return a spinner or any other
  // indicator of the sign-in process if desired.
  return null;
};

export default FirebaseSignIn;
