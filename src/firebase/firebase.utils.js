import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDTfv0G6aXN0hncuKIqfCMVuiTPtFmKEWU",
    authDomain: "shlok-ecom-658b4.firebaseapp.com",
    databaseURL: "https://shlok-ecom-658b4.firebaseio.com",
    projectId: "shlok-ecom-658b4",
    storageBucket: "shlok-ecom-658b4.appspot.com",
    messagingSenderId: "1056150553710",
    appId: "1:1056150553710:web:98392c58f103f5d47b127f",
    measurementId: "G-D9900JCLGQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth)return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log("error occurred", error.message);
      }
    }
    return userRef;
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider)
  export default firebase; 
