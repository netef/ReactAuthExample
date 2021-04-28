import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv8OYQ1JyuzixasGQg8iR_sZ-x3lWbPzg",
  authDomain: "reactauthexample-ab8d6.firebaseapp.com",
  projectId: "reactauthexample-ab8d6",
  storageBucket: "reactauthexample-ab8d6.appspot.com",
  messagingSenderId: "703643359080",
  appId: "1:703643359080:web:8f8a7d0495df71cdeb28dd",
  measurementId: "G-7XCTZTL8YC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();
export { auth, firestore };




