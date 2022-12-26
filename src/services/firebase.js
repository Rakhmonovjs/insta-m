import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export const initFire = firebase.initializeApp({
  apiKey: "AIzaSyBIjCCOMkG0uvSqFUwlOvIJoZCAA7_YXY4",
  authDomain: "ins-cl.firebaseapp.com",
  projectId: "ins-cl",
  storageBucket: "ins-cl.appspot.com",
  messagingSenderId: "270843005708",
  appId: "1:270843005708:web:94854eb8f5630619f01729",
  measurementId: "G-DPNJGSP77N"
});

export const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export const firestoreFieldValue = firebase.firestore.FieldValue;
export const timestamp = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storageRef = firebase.storage().ref();
export const storage = firebase.storage();
