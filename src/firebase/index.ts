import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const config = {
  apiKey: "AIzaSyDE6QYZygS70DCOXFakv8IrcIJhmFLMBYw",
  authDomain: "zeppelum-app-1bd48.firebaseapp.com",
  projectId: "zeppelum-app-1bd48",
  storageBucket: "zeppelum-app-1bd48.appspot.com",
  messagingSenderId: "1074857841129",
  appId: "1:1074857841129:web:10401d86ded6bbb4973b78",
};

const app = initializeApp(config);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const storage = getStorage();
export const firestore = getFirestore(app);
