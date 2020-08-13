import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBdr9H6RJ4drakuBELaoUqa3vM7Q6lkJUM",
  authDomain: "clone-c4606.firebaseapp.com",
  databaseURL: "https://clone-c4606.firebaseio.com",
  projectId: "clone-c4606",
  storageBucket: "clone-c4606.appspot.com",
  messagingSenderId: "15027551924",
  appId: "1:15027551924:web:48826c5b66fea94cf361e1",
  measurementId: "G-X0S6J8Y051",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore()

export default database;