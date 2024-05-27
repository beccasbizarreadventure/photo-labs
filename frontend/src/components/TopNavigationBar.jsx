import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

const TopNavigation = (props) => {
  return (
    <nav className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList topics={props.topics} selectTopic={props.selectTopic}/>
        <FavBadge isFavPhotoExist={props.isFavPhotoExist}/>
    </nav>
  )
}

export default TopNavigation;