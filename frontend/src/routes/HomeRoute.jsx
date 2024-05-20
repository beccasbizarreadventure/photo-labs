import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = ({topics, photos}) => {

const [isLiked, setLike] = useState(false);
const handleLike = () => {
  setLike(prevIsLiked => !prevIsLiked);  
}

  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos} handleLike={handleLike} isLiked={isLiked}/>
    </div>
  );
};

export default HomeRoute;
