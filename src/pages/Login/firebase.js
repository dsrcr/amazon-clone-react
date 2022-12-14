import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZdLWeHceAdH3-AeNeb2NQNrFFbGmHFrc",
    authDomain: "clone-8023b.firebaseapp.com",
    projectId: "clone-8023b",
    storageBucket: "clone-8023b.appspot.com",
    messagingSenderId: "58263277788",
    appId: "1:58263277788:web:535e2016480c3cb0c5a419",
    measurementId: "G-9RJG6TB5LD"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();



