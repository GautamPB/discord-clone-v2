// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCJO2fF4fXH71kqe1hWJn3Jz1HXFMAIvSc',
    authDomain: 'discord-clone-v2-a9b9f.firebaseapp.com',
    projectId: 'discord-clone-v2-a9b9f',
    storageBucket: 'discord-clone-v2-a9b9f.appspot.com',
    messagingSenderId: '12044753746',
    appId: '1:12044753746:web:b1b1edf955ce5efd1b788b',
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
