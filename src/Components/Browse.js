import React from "react";

import BrowseHeader from "./BrowseHeader";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../utility/firebase";
const Browse = () => {
  const userdata = useSelector(function (store) {
    return store.userInfo;
  });

  return <div className="text-sm">{userdata && <BrowseHeader />}</div>;
};

export default Browse;
