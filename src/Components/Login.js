import React, { useState, useRef } from "react";
import Header from "./Header";
import { formValidate } from "../utility/formValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utility/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utility/userSlice";
import { netflix_icon } from "../utility/constant";

const Login = () => {
  const [isSignIn, setIssignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function ToggleSignin() {
    setIssignIn(!isSignIn);
  }
  function validateFormInput() {
    if (!isSignIn) {
      const message = formValidate([name, email, password]);
      // setErrorMessage();
      if (message == null) {
        // signUp
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential;

            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: netflix_icon,
            })
              .then(() => {
                // Profile updated!
                // ...
                const { email, uid, displayName, photoURL } = auth.currentUser;

                dispatch(
                  addUser({
                    email: email,
                    uid: uid,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
            // Signed up

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const SignupError = error.message;
            setErrorMessage(errorCode + "-" + SignupError);
            // ..
          });
      } else {
        setErrorMessage(message);
      }
    } else {
      const message = formValidate([email, password]);
      if (message == null) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // alert("Your are SignedIn");

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const signInError = error.message;
            setErrorMessage(errorCode + "-" + signInError);
          });
      } else {
        setErrorMessage(message);
      }
    }
  }

  return (
    <div className="w-full h-screen relative">
      <img
        className="absolute h-screen w-screen"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="netflixbg-Img"
      />
      <div className="absolute  bg-black opacity-50 w-screen h-screen"></div>
      <Header />
      <div className="relative flex flex-col items-center z-11 w-1/4  rounded-lg py-[50px] bg-black bg-opacity-70 mx-auto ">
        <form className="flex flex-col w-4/5 ">
          <label className="text-white font-semibold text-4xl my-4">
            {isSignIn ? "Sign in" : "Sign up"}
          </label>
          {!isSignIn && (
            <input
              ref={name}
              name="name"
              type="text"
              className="h-14 rounded-lg my-3 px-4 text-white text-lg bg-gray-700"
              placeholder="Full name"
            />
          )}
          <input
            ref={email}
            name="email"
            type="text"
            className="email h-14 rounded-lg my-3 px-4 text-white text-lg bg-gray-700"
            placeholder="Email or Phone number"
          />
          <input
            ref={password}
            name="password"
            type="password"
            className="h-14 rounded-lg my-4 text-lg text-white px-4 bg-gray-700 password"
            placeholder="Password"
          />
          <p className="text-orange-700 my-1">{errorMessage}</p>

          {/*********Sign In and Sign up Button ***********************/}

          <button
            className="bg-red-950 text-white  h-14 font-semibold "
            onClick={function (e) {
              e.preventDefault();
              validateFormInput();
            }}
          >
            {isSignIn ? "Sign in" : "Sign up"}
          </button>
        </form>
        <div className="flex flex-row justify-between  my-4 w-4/5">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              className="w-7 h-[21px] rounded-md bg-gray-800"
              name="remember"
            />
            <label htmlFor="checkbox" className="text-white ">
              Remember me
            </label>
          </div>

          <h4 className="text-white">Need Help?</h4>
        </div>
        <div className="flex flex-row  my-7 w-4/5 justify-start">
          <h4 className="text-white">
            {isSignIn ? "New to Netflix?" : "Already Register? "}
          </h4>
          <p
            className="text-white px-1 font-bold cursor-pointer"
            onClick={function () {
              ToggleSignin();
              setErrorMessage("");

              if (!isSignIn) {
                [name, email, password].map(function (i) {
                  i.current.value = "";
                  return i;
                });
              } else {
                [email, password].map(function (i) {
                  i.current.value = "";
                  return i;
                });
              }
            }}
          >
            {isSignIn ? "Sign Up now" : "Sign in"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
