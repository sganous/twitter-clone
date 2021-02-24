import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs4clXFRfR-AHvgcyQYxscHOe1ttCBxeY",
  authDomain: "twitter-clone-15d26.firebaseapp.com",
  projectId: "twitter-clone-15d26",
  storageBucket: "twitter-clone-15d26.appspot.com",
  messagingSenderId: "612169207834",
  appId: "1:612169207834:web:95b6faf8743028653241a3",
  measurementId: "G-WX8NK9KGZQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

 export default db;
