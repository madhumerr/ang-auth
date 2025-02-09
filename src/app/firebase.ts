// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth }  from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "ang-auth-57af5.firebaseapp.com",
  projectId: "ang-auth-57af5",
  storageBucket: "ang-auth-57af5.firebasestorage.app",
  messagingSenderId: "343770223253",
  appId: "1:343770223253:web:762176986af0047d36419c",
  measurementId: "G-NV5QREL248"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app)
export default app;
