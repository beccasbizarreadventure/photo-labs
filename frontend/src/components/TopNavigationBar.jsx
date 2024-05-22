import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

const TopNavigation = ({topics, isFavPhotoExist}) => {
  return (
    <nav className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='topics-nav'>
        <TopicList topics={topics}/>
        <FavBadge isFavPhotoExist={isFavPhotoExist}/>
      </div>
    </nav>
  )
}

export default TopNavigation;