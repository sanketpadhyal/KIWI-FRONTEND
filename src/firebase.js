import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyACklcfTmVDmccKvxoEOzurKB8hdjiCjFg",
  authDomain: "kiwi-adsync.firebaseapp.com",
  projectId: "kiwi-adsync",
  storageBucket: "kiwi-adsync.firebasestorage.app",
  messagingSenderId: "456863694347",
  appId: "1:456863694347:web:e2e766fd340a5229ea910e"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)