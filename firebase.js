import { getApps, initializeApp, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB5HflA9oFucmvfNrojs46rIPRxcoJU32Q",
    authDomain: "signal-clone-app-c9df0.firebaseapp.com",
    projectId: "signal-clone-app-c9df0",
    storageBucket: "signal-clone-app-c9df0.appspot.com",
    messagingSenderId: "286032583814",
    appId: "1:286032583814:web:143b475d423b54faa80507"
};

let app;

if( getApps().length === 0 ) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

const db = getFirestore();
const auth = getAuth();

export { db, auth };