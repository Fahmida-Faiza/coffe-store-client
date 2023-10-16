// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAFefS2aCcpuHDh_gD99oWQqds2orC5Ek",
  authDomain: "coffee-store-8ff2e.firebaseapp.com",
  projectId: "coffee-store-8ff2e",
  storageBucket: "coffee-store-8ff2e.appspot.com",
  messagingSenderId: "987333530128",
  appId: "1:987333530128:web:5e92be1e26ec4c599bb095",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;