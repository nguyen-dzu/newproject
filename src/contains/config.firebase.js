import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAv1o89bpFttj_xYCy32CmLNFkWgV_oTP4",
  authDomain: "sportswear-management.firebaseapp.com",
  databaseURL:
    "https://sportswear-management-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sportswear-management",
  storageBucket: "sportswear-management.appspot.com",
  messagingSenderId: "220464884318",
  appId: "1:220464884318:web:0352d9b762c3eb3c4c22cf",
  measurementId: "G-YBKCP2GR9Z",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const dbFireStore = getFirestore(app);
export const auth = getAuth(app);
export const dbRealTime = getDatabase(app);
