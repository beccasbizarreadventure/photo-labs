import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';


function PhotoFavButton() {

const [isLiked, setLike] = useState('false');
const handleClick = () => {
  setLike(!isLiked);  
}

return (
  <div className="photo-list__fav-icon" onClick={handleClick}>
    <div className="photo-list__fav-icon-svg">
      <FavIcon selected={isLiked} />
    </div>
  </div>
);
}

export default PhotoFavButton;