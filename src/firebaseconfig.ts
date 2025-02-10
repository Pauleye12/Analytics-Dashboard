import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0DyAfJXTGI5v1DJXQ0bkSPMH-wM6bUtQ",
  authDomain: "pauleye-photo-gallery-app.firebaseapp.com",
  projectId: "pauleye-photo-gallery-app",
  storageBucket: "pauleye-photo-gallery-app.firebasestorage.app",
  messagingSenderId: "136464566247",
  appId: "1:136464566247:web:bd774b4acce81f8d33df42",
};

const app = initializeApp(firebaseConfig);
export default app;
