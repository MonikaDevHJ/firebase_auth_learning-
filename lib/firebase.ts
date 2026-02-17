import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFk5QR1EeV1xJK2bEcRf4l8GJr6qb0yBk",
  authDomain: "fir-auth-learning-a67cb.firebaseapp.com",
  projectId: "fir-auth-learning-a67cb",
  storageBucket: "fir-auth-learning-a67cb.firebasestorage.app",
  messagingSenderId: "619760511678",
  appId: "1:619760511678:web:72af8612d76b077ee40cef"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
