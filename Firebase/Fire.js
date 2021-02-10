import firebase from "firebase";
// import "@firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDUm3EN1GJhqXVIiizL6whiQVWHYQEs_8Y",
  authDomain: "health-passport-a39e2.firebaseapp.com",
  projectId: "health-passport-a39e2",
  storageBucket: "health-passport-a39e2.appspot.com",
  messagingSenderId: "213492687926",
  appId: "1:213492687926:web:8cb6e17116c357d61fa497",
  measurementId: "G-KGVL5SJ4VZ",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.analytics();

export const db = firebase.firestore();
