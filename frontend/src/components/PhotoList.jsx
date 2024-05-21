import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos,
  handleLike = () => { }, 
  isLiked = [], 
  selectPhoto = () => { } 
}) => {

  return (
    <ul className="photo-list">
      {
        photos.map((photoItem, id) => (
          <PhotoListItem photo={photoItem} key={photoItem.id} handleLike={() => handleLike(photoItem.id)} isLiked={isLiked.includes(photoItem.id)} selectPhoto={selectPhoto} />
        ))
      }
    </ul>
  );
};

export default PhotoList;
