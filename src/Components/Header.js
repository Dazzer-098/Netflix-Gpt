import React from "react";

const Header = () => {
  return (
    <div className="relative z-10 flex items-center justify-between px-1 py-1 bg-gradient-to-b from-black">
      <div className="flex flex-row gap-7">
        <img
          className=" w-[200px]"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
      </div>
    </div>
  );
};

export default Header;
