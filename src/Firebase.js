import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.
// };


const firebaseConfig = {
  apiKey: "AIzaSyC8Q3iUZ1YBm5RL1NgqDHCeYpe_md3tiWI",
  authDomain: "netflix-react-yt-a931a.firebaseapp.com",
  projectId: "netflix-react-yt-a931a",
  storageBucket: "netflix-react-yt-a931a.appspot.com",
  messagingSenderId: "680135445292",
  appId: "1:680135445292:web:56e8f7f8e68988f1bdfa89",
  measurementId: "G-WGT0N764LV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
