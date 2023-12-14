import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyCYzctV2tgis_nfVU1VK2MnVPYvovJ2mqE",
  authDomain: "zeppelum-app.firebaseapp.com",
  projectId: "zeppelum-app",
  storageBucket: "zeppelum-app.appspot.com",
  messagingSenderId: "1081639105093",
  appId: "1:1081639105093:web:a07858902b0d5cfd45e92c",
  measurementId: "G-JK031R8L2T",
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const storage = getStorage();
export const firestore = getFirestore(app);
