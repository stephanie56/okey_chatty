import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "okay-chatty-4369e.firebaseapp.com",
  databaseURL: "https://okay-chatty-4369e.firebaseio.com",
  projectId: "okay-chatty-4369e",
  storageBucket: "okay-chatty-4369e.appspot.com",
  messagingSenderId: "1044257155905"
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
