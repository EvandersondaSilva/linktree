
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfQVyHOLEewl4Q6Ty-MCsfpDlm6soX7bY",
    authDomain: "devlink-6f707.firebaseapp.com",
    projectId: "devlink-6f707",
    storageBucket: "devlink-6f707.firebasestorage.app",
    messagingSenderId: "1033724014930",
    appId: "1:1033724014930:web:388640c08ebe7a6d9a8a8b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }