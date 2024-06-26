import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { toggleFavourite, favourite } = props;

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavourite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
