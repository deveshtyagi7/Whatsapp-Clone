import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB_VLVWUaFKjGF96NbwULaM_n7jzxs22X0",
    authDomain: "whatsapp-clone-e1d91.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-e1d91.firebaseio.com",
    projectId: "whatsapp-clone-e1d91",
    storageBucket: "whatsapp-clone-e1d91.appspot.com",
    messagingSenderId: "195796448785",
    appId: "1:195796448785:web:a2eaeeb0ed0b452fb7a3b0",
    measurementId: "G-97TKX0H1C9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth ,provider};
  export default db;