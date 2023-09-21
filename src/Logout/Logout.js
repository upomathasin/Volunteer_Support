import React from "react";
import { getAuth, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
const auth = getAuth(app);

export default function Logout() {
  signOut(auth)
    .then(() => {
      console.log("sign out !!");
    })
    .catch((error) => {
      // An error happened.
    });
  return <div>Logout</div>;
}
