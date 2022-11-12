import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8xG2gkfBEo-Li-llknJUnADTgdTi8pc8",
  authDomain: "cland-596ce.firebaseapp.com",
  projectId: "cland-596ce",
  storageBucket: "cland-596ce.appspot.com",
  messagingSenderId: "645507172043",
  appId: "1:645507172043:web:e3125115edcaaafc5dbd4e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = getFirestore(app);
