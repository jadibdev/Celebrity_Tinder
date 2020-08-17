import firebase from 'firebase'

const firebase_key = process.env.FIREBASE_API_KEY;

const firebaseConfig = {
<<<<<<< HEAD
  apiKey: firebase_key,
  authDomain: "celebrity-tinder-2532b.firebaseapp.com",
  databaseURL: "https://celebrity-tinder-2532b.firebaseio.com",
  projectId: "celebrity-tinder-2532b",
  storageBucket: "celebrity-tinder-2532b.appspot.com",
  messagingSenderId: "437199043934",
  appId: "1:437199043934:web:080c166ea57176543b63cf",
  measurementId: "G-RPK0P7EDLE",
=======
  apiKey: "use your own firebase API key",
  authDomain: "clone-c4606.firebaseapp.com",
  databaseURL: "https://clone-c4606.firebaseio.com",
  projectId: "clone-c4606",
  storageBucket: "clone-c4606.appspot.com",
  messagingSenderId: "15027551924",
  appId: "1:15027551924:web:48826c5b66fea94cf361e1",
  measurementId: "G-X0S6J8Y051",
>>>>>>> 242f4f27f8678bf00c490fb80d6d232e76e59754
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore()

export default database;
