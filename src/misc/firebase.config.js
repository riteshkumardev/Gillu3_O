import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


// const config = {
//   apiKey: "AIzaSyD2dL96se3yIXIPKOtvtTuPU4vPcmYknf8",
//   authDomain: "chat-app-15798.firebaseapp.com",
//   projectId: "chat-app-15798",
//   storageBucket: "chat-app-15798.appspot.com",
//   messagingSenderId: "159523893460",
//   appId: "1:159523893460:web:068a680501040583488b41",
//   databaseURL:
//     "https://chat-app-15798-default-rtdb.asia-southeast1.firebasedatabase.app/",
// }


const firebaseConfig = {
  apiKey: "AIzaSyCivmHHTVT7FpFT0xAJpI89Rvji64l5s1c",
  authDomain: "gillu3-o.firebaseapp.com",
  projectId: "gillu3-o",
  storageBucket: "gillu3-o.appspot.com",
  messagingSenderId: "527830563448",
  appId: "1:527830563448:web:ad0a080c1393ea6a0acb8d",
  measurementId: "G-EZNGW8QX6Y",
    // apiKey: "AIzaSyD2dL96se3yIXIPKOtvtTuPU4vPcmYknf8",
    // authDomain: "chat-app-15798.firebaseapp.com",
    // projectId: "chat-app-15798",
    // storageBucket: "chat-app-15798.appspot.com",
    // messagingSenderId: "159523893460",
    // appId: "1:159523893460:web:068a680501040583488b41",
    databaseURL:
      "https://gillu3-o-default-rtdb.firebaseio.com",

};






const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
