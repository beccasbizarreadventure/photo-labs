import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({topics, photos, selectPhoto}) => {

const [isLiked, setLike] = useState([]);
const handleLike = (photoId) => {
  if (isLiked.includes(photoId)) {
    setLike(prevIsLiked => prevIsLiked.filter(id => id !== photoId));  
  } else {
    setLike(prevIsLiked => [...prevIsLiked, photoId]);
  }
};

const isFavPhotoExist = isLiked.length >= 1;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isLiked={isLiked} isFavPhotoExist={isFavPhotoExist}/>
      <PhotoList photos={photos} handleLike={handleLike} isLiked={isLiked} selectPhoto={selectPhoto}/>
    </div>
  );
};

export default HomeRoute;
