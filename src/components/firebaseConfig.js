import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCXuTrFDhQxBB9dfikejAqrLFvrMpmk9kE",
  authDomain: "gamerz-af7ff.firebaseapp.com",
  projectId: "gamerz-af7ff",
  storageBucket: "gamerz-af7ff.appspot.com",
  messagingSenderId: "739579287792",
  appId: "1:739579287792:web:7cbb92c8ed741797a54a35",
  measurementId: "G-H1587SXGY2"
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

