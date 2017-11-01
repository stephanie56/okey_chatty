import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAc8_9ijZyxsAyGzhcBR3feWuDxgLYePSU",
  authDomain: "okay-chatty-4369e.firebaseapp.com",
  databaseURL: "https://okay-chatty-4369e.firebaseio.com",
  projectId: "okay-chatty-4369e",
  storageBucket: "okay-chatty-4369e.appspot.com",
  messagingSenderId: "1044257155905"
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
