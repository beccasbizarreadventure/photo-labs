import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = (props) => {
  return (
    <span className="fav-badge">
      <FavIcon selected displayAlert={!!props.doesFavPhotoExist} />
    </span>
  );
};

export default FavBadge;
