// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2i3zRIOT4ClJvFICA9KHKNrUV-1UU0qw",
  authDomain: "microservice-firebase-users.firebaseapp.com",
  projectId: "microservice-firebase-users",
  storageBucket: "microservice-firebase-users.appspot.com",
  messagingSenderId: "56882327959",
  appId: "1:56882327959:web:264ae65ffa51dd4e2dd4d2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports = {firebase}