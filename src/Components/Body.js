import React, { useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./Login";
import Browse from "./Browse";
import { auth } from "../utility/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeuser } from "../utility/userSlice";
const Body = () => {
  const dispatch = useDispatch();

  // getting userInfo when signed in
  useEffect(function () {
    onAuthStateChanged(auth, (user) => {
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

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeuser(null));

        console.log("no user");
      }
    });
  }, []);

  // BrowserRouter
  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div className="w-full">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
