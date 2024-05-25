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
          onToggleFavourite={() => toggleFavourite(photoItem.id)}
          favourite={favourite}
          onSelectPhoto={() => selectPhoto(photoItem)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
