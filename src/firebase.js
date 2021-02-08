import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJ1LglSm1_almuCt621kCB-hKiuqqIiwA",
    authDomain: "drive-c9222.firebaseapp.com",
    projectId: "drive-c9222",
    storageBucket: "drive-c9222.appspot.com",
    messagingSenderId: "157883339244",
    appId: "1:157883339244:web:3c3dce17f6f33aa8cfb0c9",
    measurementId: "G-KYT01LFKXC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();

const auth = new firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider, db, storage};