// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID


  // API KEY WILL BE DELETED SOON

  apiKey: "AIzaSyCUxxCqe9j_atXbFgZ_D7D4a42UQPs0W4o",
  authDomain: "netflix-clone-react-c9e97.firebaseapp.com",
  projectId: "netflix-clone-react-c9e97",
  storageBucket: "netflix-clone-react-c9e97.appspot.com",
  messagingSenderId: "945408437068",
  appId: "1:945408437068:web:67f35d4dbc2e5ed4c3bde9"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);