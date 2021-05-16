import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDFx6B7SgOU6g_aE2BahIdTBWgsKKd0XZc",
  authDomain: "my-clients-data.firebaseapp.com",
  projectId: "my-clients-data",
  storageBucket: "my-clients-data.appspot.com",
  messagingSenderId: "155369270008",
  appId: "1:155369270008:web:091e443093557a0541e90d",
  measurementId: "G-Z9Q0X697RM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collections
const usersCollection = db.collection("users");
const clientsInfoCollection = db.collection("clients");

// export
export { db, auth, usersCollection, clientsInfoCollection };
