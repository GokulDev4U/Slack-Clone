// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBuxiI_oMsowkU4rZ7pig7R72mRbyX11xc",
    authDomain: "slack-clone-e1877.firebaseapp.com",
    databaseURL: "https://slack-clone-e1877.firebaseio.com",
    projectId: "slack-clone-e1877",
    storageBucket: "slack-clone-e1877.appspot.com",
    messagingSenderId: "350063851641",
    appId: "1:350063851641:web:5317c28ee92e18c15cfca8",
    measurementId: "G-6JHMSRK7LG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;