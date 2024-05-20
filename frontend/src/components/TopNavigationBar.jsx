import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

const TopNavigation = ({topics, isLiked}) => {
  return (
    <nav className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList topics={topics}/>
        <FavBadge isFavPhotoExist={isLiked.length >= 1}/>
    </nav>
  )
}

export default TopNavigation;