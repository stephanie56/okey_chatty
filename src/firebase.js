import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAOAYo4hwazxkXWsh2brHIHINhfrGfYjfw",
    authDomain: "okay-chatty.firebaseapp.com",
    databaseURL: "https://okay-chatty.firebaseio.com",
    projectId: "okay-chatty",
    storageBucket: "okay-chatty.appspot.com",
    messagingSenderId: "465158697123"
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
