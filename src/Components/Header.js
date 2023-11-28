import React from "react";
import { addUser, removeuser } from "../utility/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utility/firebase";
import { netflix_logo } from "../utility/constant";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(function () {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { email, uid, displayName, photoURL } = user;

        dispatch(
          addUser({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser(null));
        navigate("/");
      }
    });
    return function () {
      unsuscribe();
    };
  }, []);
  return (
    <div className="flex items-center justify-between px-1 py-1 ">
      <div className="flex flex-row gap-7">
        <img className=" w-[200px]" src={netflix_logo} alt="netflix-logo" />
      </div>
    </div>
  );
};

export default Header;
