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
      <img src={userIcon} alt="user icon" id="unknown-user" />
      <p>Sign In</p>
    </button>
  );
}

export function SignOut() {
  return (
    <div>
      {/* Hello, {auth.currentUser.displayName} &nbsp; Will be added in user page probably */}
      <button className="signOut-btn" onClick={() => signOut(auth)}>
        <p>Sign Out</p>
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
