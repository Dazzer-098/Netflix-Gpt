import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIssignIn] = useState(true);
  function ToggleSignin() {
    setIssignIn(!isSignIn);
  }

  return (
    <div className="w-full h-screen relative">
      <img
        className="absolute "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="netflixbg-Img"
      />
      <div class="absolute  bg-black opacity-50 w-full h-[846px]"></div>
      <Header />
      <div className="relative flex flex-col items-center z-11 w-1/4  rounded-lg py-[50px] bg-black bg-opacity-70 mx-auto ">
        <form className="flex flex-col w-4/5 ">
          <label className="text-white font-semibold text-5xl">
            {isSignIn ? "Sign in" : "Sign up"}
          </label>
          {!isSignIn && (
            <input
              type="text"
              className="h-14 rounded-lg my-7 px-4 text-white text-lg bg-gray-700"
              placeholder="Full name"
            />
          )}
          <input
            type="text"
            className="h-14 rounded-lg my-7 px-4 text-white text-lg bg-gray-700"
            placeholder="Email or Phone number"
          />
          <input
            type="password"
            className="h-14 rounded-lg my-7 text-lg text-white px-4 bg-gray-700"
            placeholder="Password"
          />
          <button className="bg-red-950 text-white  h-14 font-semibold ">
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
            onClick={ToggleSignin}
          >
            {isSignIn ? "Sign Up now" : "Sign in"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
