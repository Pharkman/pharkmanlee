import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAcimSM5LZz2-DTgjKuRHPR2OjOoY-64A4",
  authDomain: "personalportfolio-fe103.firebaseapp.com",
  databaseURL: "https://personalportfolio-fe103-default-rtdb.firebaseio.com",
  projectId: "personalportfolio-fe103",
  storageBucket: "personalportfolio-fe103.appspot.com",
  messagingSenderId: "532640917152",
  appId: "1:532640917152:web:0445fdab32f3858c258bc5",
  measurementId: "G-XDQB3HZF24"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
