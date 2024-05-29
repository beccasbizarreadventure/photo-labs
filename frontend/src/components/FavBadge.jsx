import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = (props) => {
  const { doesFavPhotoExist, handleShowFavourites } = props;
  return (
    <span className="fav-badge" onClick={handleShowFavourites}>
      <FavIcon selected displayAlert={!!doesFavPhotoExist} />
    </span>
  );
};

export default FavBadge;
