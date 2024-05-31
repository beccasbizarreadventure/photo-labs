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
    handleShowFavourites,
    returnHome
  } = props;
  
  return (
    <div className="home-route">
      <TopNavigation
        returnHome={returnHome}
        topics={topics}
        doesFavPhotoExist={doesFavPhotoExist}
        selectTopic={selectTopic}
        handleShowFavourites={handleShowFavourites}
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
