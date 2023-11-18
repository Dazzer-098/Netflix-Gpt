import React from "react";

import BrowseHeader from "./BrowseHeader";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Browse = () => {
  const userdata = useSelector(function (store) {
    return store.userInfo;
  });

  return (
    <div className="text-sm">
      <BrowseHeader />
    </div>
  );
};

export default Browse;
