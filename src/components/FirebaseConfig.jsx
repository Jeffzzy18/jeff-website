// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAM-_vjIZqKUfeS-y_6XJ8qbvubuIjlpVc",
  authDomain: "sample-firebase-ai-app1-58141.firebaseapp.com",
  projectId: "sample-firebase-ai-app1-58141",
  storageBucket: "sample-firebase-ai-app1-58141.firebasestorage.app",
  messagingSenderId: "61451223581",
  appId: "1:61451223581:web:63cfb202c6b0d568b43cf4",
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
// 导出 Firebase Auth 实例
// export default firebaseConfig
const myAuth = getAuth(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});
const myDataBase = getFirestore(app);
export{app, myAuth, myDataBase}
