import React, { useState } from "react";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  selectPhoto,
  toggleFavourite,
  favourite,
  isFavPhotoExist,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
      />
      <PhotoList
        photos={photos}
        toggleFavourite={toggleFavourite}
        favourite={favourite}
        selectPhoto={selectPhoto}
      />
    </div>
  );
};

export default HomeRoute;
