import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <span className='fav-badge'>
      <FavIcon selected displayAlert={!!isFavPhotoExist}/>
    </span>
  ) 
};

export default FavBadge;