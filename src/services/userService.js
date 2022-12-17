import { useAuthentication } from "../services/authService";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../components/firebaseConfig";

export const LikeOnClick = async (game) => {
  const user = useAuthentication();
  if (user) {
    const userRef = doc(db, "users", user.uid);
    setDoc(userRef, { likedGames: [game] })
      .then(console.log("Addition successful"))
      .catch((error) => console.error(error));
  } else {
    alert("Sign in to like a game!");
  }
};
