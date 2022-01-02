import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getIdToken,
  updateProfile,
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setuser] = useState({});

  const [isLoading, setLoading] = useState(true);

  const [autherror, setAuthError] = useState(true);

  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const registerUser = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const destination = location?.state?.from || '/';
        // history.replace(destination);
        setAuthError("");

        const newUser = { email, displayName: name };
        setuser(newUser);
        saveUser(email, name);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        setAuthError(error.message);

        // ..
      })
      .finally(() => setLoading(false));
  };

  const loginUser = (email, password, location, history) => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError(""); // ...
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetch(`https://shrouded-harbor-84354.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setLoading(false));
  };

  // Obser user State
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user)
        .then(idToken => sessionStorage.setItem('idToken' ,idToken));
      
        setuser(user);
      } else {
        setuser({});
      }

      setLoading(false);
    });
    return () => unsubcribe;
  }, []);

  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://shrouded-harbor-84354.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    admin,
    registerUser,
    loginUser,
    isLoading,
    autherror,
    logOut,
  };
};

export default useFirebase;
