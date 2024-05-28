import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = (props) => {
  const { doesFavPhotoExist } = props;
  return (
    <span className="fav-badge">
      <FavIcon selected displayAlert={!!doesFavPhotoExist} />
    </span>
  );
};

export default FavBadge;
