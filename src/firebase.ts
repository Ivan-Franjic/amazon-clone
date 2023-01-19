import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHmF355d3lOnhiQnWW1smsUcBPK-XiSJQ",
  authDomain: "clone-e98ba.firebaseapp.com",
  projectId: "clone-e98ba",
  storageBucket: "clone-e98ba.appspot.com",
  messagingSenderId: "164398688192",
  appId: "1:164398688192:web:9ed65c51f0d2ba7b4e0a25",
  measurementId: "G-E5QPYN8GTK",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
