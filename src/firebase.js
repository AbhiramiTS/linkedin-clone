import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAsbLFkzJXshb4yYxMzhd9PBWK9EDgtKZM",
    authDomain: "linkedin-clone-f710a.firebaseapp.com",
    projectId: "linkedin-clone-f710a",
    storageBucket: "linkedin-clone-f710a.appspot.com",
    messagingSenderId: "688511573032",
    appId: "1:688511573032:web:7210430a7f913c67cca91d",
    measurementId: "G-KXEDRHRGNM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };