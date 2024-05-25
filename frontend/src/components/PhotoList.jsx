import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavourite, favourite, selectPhoto }) => {
  return (
    <ul className="photo-list">
      {photos.map((photoItem) => (
        <PhotoListItem
          photo={photoItem}
          key={photoItem.id}
          toggleFavourite={() => toggleFavourite(photoItem.id)}
          favourite={favourite.includes(photoItem.id)}
          selectPhoto={() => selectPhoto(photoItem)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
