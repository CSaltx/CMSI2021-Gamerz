import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../components/firebaseConfig";
import userIcon from "./userIcon.png";

export function SignIn() {
  return (
    <button
      className="signIn-btn"
      onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
    >
      <img src={userIcon} alt="user icon" />
      <h2>Sign In</h2>
    </button>
  );
}

export function SignOut() {
  return (
    <div>
      {/* Hello, {auth.currentUser.displayName} &nbsp; Will be added in user page probably */}
      <button className="signOut-btn" onClick={() => signOut(auth)}>
        <h2>Sign Out</h2>
      </button>
    </div>
  );
}

export function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}
