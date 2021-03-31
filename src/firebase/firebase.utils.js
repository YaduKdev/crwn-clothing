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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log("error creating user.", error.message);
    }
    // return userRef;
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;