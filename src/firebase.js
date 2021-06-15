import firebase from "firebase";
require("dotenv").config();

const firebaseApp = firebase.initializeApp({
	apiKey: process.env.API_KEY,
	authDomain: "fb-msg-b6dd3.firebaseapp.com",
	projectId: "fb-msg-b6dd3",
	storageBucket: "fb-msg-b6dd3.appspot.com",
	messagingSenderId: "940193805664",
	appId: "1:940193805664:web:635fe235838071807cda05",
	measurementId: "G-83GK5MS36R",
});

const db = firebaseApp.firestore();

export default db;
