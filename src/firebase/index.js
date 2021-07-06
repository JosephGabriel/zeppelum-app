import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCYzctV2tgis_nfVU1VK2MnVPYvovJ2mqE",
  authDomain: "zeppelum-app.firebaseapp.com",
  projectId: "zeppelum-app",
  storageBucket: "zeppelum-app.appspot.com",
  messagingSenderId: "1081639105093",
  appId: "1:1081639105093:web:d1d79894d6d4950845e92c",
  measurementId: "G-7F06J5HG2K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
