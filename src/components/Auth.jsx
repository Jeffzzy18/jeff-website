import { myAuth } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (Email, password) => {
  return createUserWithEmailAndPassword(myAuth, Email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(myAuth, email, password);
};
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(myAuth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(credential);
    
  });
//   return result;
};
export const doSignOut = () => {
  return myAuth.signOut();
};
export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(myAuth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(myAuth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(myAuth.currentUser, {
    url: `${window.location.origin}/`,
  });
};
