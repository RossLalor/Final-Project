// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSPoV9ip_Ti5qDbRb6l8kQmaarmunRB-A",
  authDomain: "year4-final.firebaseapp.com",
  projectId: "year4-final",
  storageBucket: "year4-final.appspot.com",
  messagingSenderId: "616758389024",
  appId: "1:616758389024:web:bedbb56a6f128eb8698f45",
  measurementId: "G-P2W1S16X93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Analytics conditionally
const initAnalytics = async () => {
  const supported = await isSupported();
  if (supported && typeof window !== 'undefined') {
    getAnalytics(app);
  }
};

//export const db = getFirestore(app)