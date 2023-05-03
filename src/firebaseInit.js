import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { useCollection } from 'vuefire'

// Your web app's Firebase configuration
export const firebaseApp = initializeApp ({
  apiKey: "AIzaSyAWrBKDkv0jb7vs9PXmg1APQN53xR3aSL0",
  authDomain: "peppubuild-vue.firebaseapp.com",
  projectId: "peppubuild-vue",
  storageBucket: "peppubuild-vue.appspot.com",
  messagingSenderId: "566741135380",
  appId: "1:566741135380:web:b452a6a2da8dd554d93701",
  measurementId: "G-X3E83PW40N"
});

const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const usersRef = collection(db, 'users')