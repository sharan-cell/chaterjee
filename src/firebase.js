// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6g_bWyYUyXLiYHVKsZDmFcjefC_97yy8",
  authDomain: "chat-chat-a8fcb.firebaseapp.com",
  projectId: "chat-chat-a8fcb",
  storageBucket: "chat-chat-a8fcb.appspot.com",
  messagingSenderId: "996126366560",
  appId: "1:996126366560:web:2810e249d1fad0f7f7dc05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app)