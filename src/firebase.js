import firebase from 'firebase'

const firebase_key = process.env.FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: firebase_key,
  authDomain: "celebrity-tinder-2532b.firebaseapp.com",
  databaseURL: "https://celebrity-tinder-2532b.firebaseio.com",
  projectId: "celebrity-tinder-2532b",
  storageBucket: "celebrity-tinder-2532b.appspot.com",
  messagingSenderId: "437199043934",
  appId: "1:437199043934:web:080c166ea57176543b63cf",
  measurementId: "G-RPK0P7EDLE",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore()

export default database;