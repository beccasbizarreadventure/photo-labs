import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos, handleLike, isLiked}) => {

  return (
    <ul className="photo-list">
      {
        photos.map((photoItem, id) => (
          <PhotoListItem photo={photoItem} key={id} handleLike={() => handleLike(photoItem.id)} isLiked={isLiked.includes(photoItem.id)}/>
        ))
      }
    </ul>
  );
};

export default PhotoList;
