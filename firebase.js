import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB5HflA9oFucmvfNrojs46rIPRxcoJU32Q",
    authDomain: "signal-clone-app-c9df0.firebaseapp.com",
    projectId: "signal-clone-app-c9df0",
    storageBucket: "signal-clone-app-c9df0.appspot.com",
    messagingSenderId: "286032583814",
    appId: "1:286032583814:web:143b475d423b54faa80507"
};

let app;

if( firebase.apps.length === 0 ) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };