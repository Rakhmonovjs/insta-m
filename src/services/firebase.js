import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export const initFire = firebase.initializeApp({
  apiKey: "AIzaSyDxQggtVJkyOnvTjVC115XmCGSPaW6UEjc",
  authDomain: "instagrammm-da18b.firebaseapp.com",
  databaseURL: "https://instagrammm-da18b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "instagrammm-da18b",
  storageBucket: "instagrammm-da18b.appspot.com",
  messagingSenderId: "589599186434",
  appId: "1:589599186434:web:98f0e28c9964a1efe2511b",
  measurementId: "G-V5SPMRME4Y"
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

export const register = async ( email, password ) => {
  try {
     const response = await firebase.auth().createUserWithEmailAndPassword(auth, email, password)
  }   
  catch (err) {
    console.log(err);
  }
}