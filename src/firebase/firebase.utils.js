import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD3g_IIaEs9Z_EJ9R_8soGpX920EwVMZMY",
    authDomain: "crwn-db-2f5ab.firebaseapp.com",
    projectId: "crwn-db-2f5ab",
    storageBucket: "crwn-db-2f5ab.appspot.com",
    messagingSenderId: "292955324479",
    appId: "1:292955324479:web:e6e06d15148efc3362f88a",
    measurementId: "G-1J50R28J1T"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;