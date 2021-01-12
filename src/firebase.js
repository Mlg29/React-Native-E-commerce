import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyCXPMmiIBTwy7Tl4dJ8Ri1ORSDL1OVTC4o",
    authDomain: "reactnative-app-32ca1.firebaseapp.com",
    projectId: "reactnative-app-32ca1",
    storageBucket: "reactnative-app-32ca1.appspot.com",
    messagingSenderId: "1061983855080",
    appId: "1:1061983855080:web:f4e92e3b85c91e493bc45d",
    measurementId: "G-WTMMEJQKTD"
}

var fire = firebase.initializeApp(firebaseConfig);

export const db = fire.database()





