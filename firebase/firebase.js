import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAksxbkK66LtENnyvluPax7Yy0NEtfKOvM",
  authDomain: "newquil.firebaseapp.com",
  projectId: "newquil",
  storageBucket: "newquil.appspot.com",
  messagingSenderId: "358489025882",
  appId: "1:358489025882:web:d85fa020a1d4c857509763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);