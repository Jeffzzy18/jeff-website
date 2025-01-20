// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
// import { getDatabase, ref, set, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAM-_vjIZqKUfeS-y_6XJ8qbvubuIjlpVc",
  authDomain: "sample-firebase-ai-app1-58141.firebaseapp.com",
  projectId: "sample-firebase-ai-app1-58141",
  storageBucket: "sample-firebase-ai-app1-58141.firebasestorage.app",
  messagingSenderId: "61451223581",
  appId: "1:61451223581:web:63cfb202c6b0d568b43cf4",
  databaseURL: "https://Users.firebaseio.com",
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
// 导出 Firebase Auth 实例
// export default firebaseConfig
const myAuth = getAuth(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

const db = getFirestore(app);

// Get information
async function getUserData(id) {
  try {
    // 替换为您的集合和文档路径
    const docRef = doc(db, "Users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("文档数据:", docSnap.data());
    } else {
      console.log("未找到该文档！");
    }
  } catch (error) {
    console.error("读取数据时发生错误:", error);
  }
}
getUserData("XWfQ3kVPLPFerEEAWZMi");


// Have to set ID manually
await setDoc(doc(db, "Users", "1"), {
  User_name: "Nancy",
  User_gender: "male",
  User_account: "google",
});

// Will allocate ID automatically
await addDoc(collection(db, "Locations"), {
  User_name: "Jeff",
  country: "Sydney",
});

export { app, myAuth, db };
