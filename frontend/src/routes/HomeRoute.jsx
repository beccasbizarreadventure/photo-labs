import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({topics, photos, selectPhoto, handleLike, isLiked, isFavPhotoExist}) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isLiked={isLiked} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} handleLike={handleLike} isLiked={isLiked} selectPhoto={selectPhoto}/>
    </div>
  );
};

export default HomeRoute;
