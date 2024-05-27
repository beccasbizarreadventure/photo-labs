import React, { useState } from "react";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";

import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        isFavPhotoExist={props.isFavPhotoExist}
        selectTopic={props.selectTopic}
      />
      <PhotoList
        photos={props.photos}
        toggleFavourite={props.toggleFavourite}
        favourite={props.favourite}
        selectPhoto={props.selectPhoto}
      />
    </div>
  );
};

export default HomeRoute;
