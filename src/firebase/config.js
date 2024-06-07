import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOY9408pxlX99rHWorhPo1POGf9ZUu2VM",
  authDomain: "miniblog-1c942.firebaseapp.com",
  projectId: "miniblog-1c942",
  storageBucket: "miniblog-1c942.appspot.com",
  messagingSenderId: "966611825823",
  appId: "1:966611825823:web:b0799f6dfeb7fde5d3deaa"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };