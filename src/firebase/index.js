import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyD4o_5TCqH1DMjgkT5QlqDfGOYwXJPJLKc",
    authDomain: "zeppelum.firebaseapp.com",
    projectId: "zeppelum",
    storageBucket: "zeppelum.appspot.com",
    messagingSenderId: "553676065918",
    appId: "1:553676065918:web:2a1a7b7bb3401f99479c2f"
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()