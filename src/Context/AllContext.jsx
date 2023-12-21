import { createContext } from "react";
import app from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const Context = createContext(null);
const auth = getAuth(app);
console.log(auth);

const AllContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // User Creation
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User login

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   On auth State Changed Activities
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(" on auth state activity", currentUser);
      const userEmail = currentUser?.email || user?.email;
      // const userName = currentUser?.displayName;
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        const loggeduserinfo = { email: userEmail };
        console.log(loggeduserinfo)
        .then((res) => {
          console.log(res.data);
        });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  // create log out method

  const logOut = () => {
    return signOut(auth);
  };

  const send = {
    createUser,
    updateProfile,
    loading,
    signIn,
    user,
    logOut,
    googleSignIn,
  };

  return <Context.Provider value={send}>{children}</Context.Provider>;
};

export default AllContext;
