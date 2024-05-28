import React from "react";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const {
    topics,
    doesFavPhotoExist,
    selectTopic,
    selectPhoto,
    toggleFavourite,
    favourite,
    photos,
  } = props;
  
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        doesFavPhotoExist={doesFavPhotoExist}
        selectTopic={selectTopic}
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
