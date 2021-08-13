// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWYf9nvuV3YKVKOCr-jLnXlLIGiKcZnZM",
  authDomain: "clone-ddda7.firebaseapp.com",
  projectId: "clone-ddda7",
  storageBucket: "clone-ddda7.appspot.com",
  messagingSenderId: "644289857913",
  appId: "1:644289857913:web:54f69b6f7d5641dad747a8",
  measurementId: "G-6NVE8MH4ZH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
