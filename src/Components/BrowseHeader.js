import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utility/firebase";

import logo from "../images/search.png";
import bell from "../images/notification.png";
import { netflix_icon } from "../utility/constant";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { GptSearchToggle } from "../utility/searchGptslice";
import Langauage from "./LangauageDropDown";

const BrowseHeader = () => {
  const searchToggle = useSelector(function (store) {
    return store.GptSearchToggle.toggle;
  });
  const dispatch = useDispatch();
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error appened.
      });
  }
  function handleToggle() {
    dispatch(GptSearchToggle());
  }
  return (
    <div className="absolute z-10  w-full flex items-center justify-between pr-5 py-1 bg-gradient-to-b from-black">
      <div className="flex flex-row gap-7">
        <Header />

        <div className="flex flex-row items-center gap-12 font-medium text-white text-xl">
          <Link>Home</Link>
          <Link>Tv Shows</Link>
          <Link>Movies</Link>
          <Link>New&Popular</Link>
          <Link>MyList</Link>
        </div>
      </div>

      <div className="flex gap-8 font-medium text-xl text-white">
        {searchToggle && <Langauage />}
        <img
          className="w-8 cursor-pointer "
          src={logo}
          alt="search-icon"
          onClick={handleToggle}
        />

        <Link>Children</Link>
        <img src={bell} className="w-6" alt="notification bell" />
        <img src={netflix_icon} alt="netflix_icon" />
        <button
          onClick={handleSignOut}
          className="text-white font-medium text-lg"
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default BrowseHeader;
