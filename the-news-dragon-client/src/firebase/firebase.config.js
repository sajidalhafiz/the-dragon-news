// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYbZ3nRlrwSriTnpzHUR92Ll1vmdahU60",
    authDomain: "the-news-dragon-af258.firebaseapp.com",
    projectId: "the-news-dragon-af258",
    storageBucket: "the-news-dragon-af258.appspot.com",
    messagingSenderId: "1050892938978",
    appId: "1:1050892938978:web:c5fa868956f27235a638bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;