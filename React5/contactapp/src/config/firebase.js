// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8YT_M88ujZLA3sXW3brlPxscvojWPzN8",
  authDomain: "vite-conatct.firebaseapp.com",
  projectId: "vite-conatct",
  storageBucket: "vite-conatct.appspot.com",
  messagingSenderId: "1020853613445",
  appId: "1:1020853613445:web:3536fc52f325340673caec",
  measurementId: "G-FH471JVG2L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db= getFirestore(app);