import React, { useState } from "react";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doSignOut,
} from "./Auth.jsx";

const LoginForm = () => {
  //   const { currentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleError = (errorCode) => {
    switch (errorCode) {
      case "auth/email-already-in-use":
        console.error(
          "The email address is already in use by another account."
        );
        break;
      case "auth/invalid-email":
        console.error("The email address is not valid.");
        break;
      case "auth/weak-password":
        console.error("The password is too weak.");
        break;
      default:
        console.error("An unknown error occurred:", errorCode);
        break;
    }
  };

  //   Regester function
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doCreateUserWithEmailAndPassword(email, password)
        .then((result) => {
          console.log("Register successfully.");
          console.log(result);
        })
        .catch((err) => {
          setIsSigningIn(false);
          handleError(err.code);
        });
    } else {
      console.log("Already login!");
    }
  };

  //   Sign in function
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          setIsSigningIn(false);
          handleError(err.code);
        });
    } else {
      console.log("Already login!");
    }
  };
  const handleLoginUsingGoogle = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false);
      });
    } else {
        console.log("Already login!");
    }
  };
  const handleLogOut = (e) => {
    e.preventDefault();
    if (isSigningIn) {
      console.log("log out successfully");
      doSignOut();
      setIsSigningIn(false);
    } else {
      console.log("Account already log out!");
    }
  };
  return (
    <>
      <form>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button onClick={handleSignUp}>sign up</button>
        <button onClick={handleSignIn}>sign in</button>
        <button onClick={handleLoginUsingGoogle}>login using Google</button>
        <button onClick={handleLogOut}>sign out</button>
      </form>
    </>
  );
};

export default LoginForm;
