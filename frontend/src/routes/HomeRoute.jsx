import React from 'react';
import topics from 'mocks/topics';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import photos from 'mocks/photos';

import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos}/>
    </div>
  );
};

export default HomeRoute;
