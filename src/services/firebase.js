// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBqRbX7vKwO3nFgzmcdzSki6rIu7h2TXY",
  authDomain: "e-commerce-4de09.firebaseapp.com",
  projectId: "e-commerce-4de09",
  storageBucket: "e-commerce-4de09.appspot.com",
  messagingSenderId: "460855099788",
  appId: "1:460855099788:web:d8f8e6636404fa380816a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
