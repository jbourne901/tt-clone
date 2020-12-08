import firebase from "firebase";
import "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCh_huKsFiwraaUbybDTOEIVTSfdmdI3qU",
    authDomain: "tt-clone-c0207.firebaseapp.com",
    databaseURL: "https://tt-clone-c0207.firebaseio.com",
    projectId: "tt-clone-c0207",
    storageBucket: "tt-clone-c0207.appspot.com",
    messagingSenderId: "240526568338",
    appId: "1:240526568338:web:67536513fdd2633c8c2f4b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  export type IDocs = firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[];

