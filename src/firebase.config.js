import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBL5cRIQ-wDIPRgMuAsnBmsAfxDA_JGKO0",
  authDomain: "house-marketplace-app-d1485.firebaseapp.com",
  projectId: "house-marketplace-app-d1485",
  storageBucket: "house-marketplace-app-d1485.appspot.com",
  messagingSenderId: "143814569258",
  appId: "1:143814569258:web:8161638af5858839a28253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();