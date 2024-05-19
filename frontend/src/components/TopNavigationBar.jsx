import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

const TopNavigation = () => {
  return (
    <nav className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList />
        <FavBadge />
    </nav>
  )
}

export default TopNavigation;