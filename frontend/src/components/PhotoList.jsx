import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photoItem) => (
        <PhotoListItem
          photo={photoItem}
          key={photoItem.id}
          toggleFavourite={() => props.toggleFavourite(photoItem.id)}
          favourite={props.favourite.includes(photoItem.id)}
          selectPhoto={() => props.selectPhoto(photoItem)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
