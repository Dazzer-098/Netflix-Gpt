import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../utility/searchGptslice";

const Langauage = () => {
  const dispatch = useDispatch();

  function handlelanguage(i) {
    dispatch(changeLanguage(i.target.value));
  }

  return (
    <div>
      <select className="bg-black rounded-md" onClick={handlelanguage}>
        <option value="en">English</option>
        <option value="Hi">Hindi</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default Langauage;
