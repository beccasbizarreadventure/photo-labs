import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton({handleLike, isLiked}) {

return (
  <div className="photo-list__fav-icon" onClick={handleLike}>
    <div className="photo-list__fav-icon-svg">
      <FavIcon selected={isLiked} />
    </div>
  </div>
);
}

export default PhotoFavButton;