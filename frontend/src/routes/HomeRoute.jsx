import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({topics, photos}) => {

const [isLiked, setLike] = useState([]);
const handleLike = (photoId) => {
  if (isLiked.includes(photoId)) {
    setLike(prevIsLiked => prevIsLiked.filter(id => id !== photoId));  
  } else {
    setLike(prevIsLiked => [...prevIsLiked, photoId]);
  }
};

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isLiked={isLiked}/>
      <PhotoList photos={photos} handleLike={handleLike} isLiked={isLiked}/>
    </div>
  );
};

export default HomeRoute;
