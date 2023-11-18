import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utility/firebase";

import logo from "../images/search.png";
import bell from "../images/notification.png";
import netflix from "../images/netflix.png";

const BrowseHeader = () => {
  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error appened.
      });
  }
  return (
    <div className="relative z-10 flex items-center justify-between px-1 py-1 bg-gradient-to-b from-black">
      <div className="flex flex-row gap-7">
        <img
          className=" w-[200px] cursor-pointer"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
          onClick={function () {
            navigate("/browse");
          }}
        />
        <div className="flex flex-row items-center gap-12 font-medium text-white text-xl">
          <Link>Home</Link>
          <Link>Tv Shows</Link>
          <Link>Movies</Link>
          <Link>New&Popular</Link>
          <Link>MyList</Link>
        </div>
      </div>
      <div className="flex gap-8 font-medium text-xl text-white">
        <img className="w-6 " src={logo} alt="search" />
        <Link>Children</Link>
        <img src={bell} className="w-6" alt="notification bell" />
        <img src={netflix} alt="netflix logo" />
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
