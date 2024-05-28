import React from "react";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";

const TopNavigation = (props) => {
  const { topics, selectTopic, doesFavPhotoExist } = props;

  return (
    <nav className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} selectTopic={selectTopic} />
      <FavBadge doesFavPhotoExist={doesFavPhotoExist} />
    </nav>
  );
};

export default TopNavigation;
