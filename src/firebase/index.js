// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtNXkwABbAgk4TVupsmcxqkGaFereqG3Y",
  authDomain: "learn-vue-b9740.firebaseapp.com",
  projectId: "learn-vue-b9740",
  storageBucket: "learn-vue-b9740.appspot.com",
  messagingSenderId: "381949457395",
  appId: "1:381949457395:web:f7b40c5a5aaebac5525886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }