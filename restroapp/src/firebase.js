import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCJw1Cddd8NoFzAYwF7_ksqI3-ZPnrvSXk",
  authDomain: "sgrestroapp.firebaseapp.com",
  projectId: "sgrestroapp",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
