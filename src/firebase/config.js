import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth as getFirebaseAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA-chKV5eJpCd3lvg9eu_t3yCYaU9TaHfc",
    authDomain: "livechat-30586.firebaseapp.com",
    projectId: "livechat-30586",
    storageBucket: "livechat-30586.appspot.com",
    messagingSenderId: "914591955206",
    appId: "1:914591955206:web:0c5d6e874c4ad3ef10c687"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getFirebaseAuth(app);
const timestamp = serverTimestamp();

export { db, timestamp, auth };