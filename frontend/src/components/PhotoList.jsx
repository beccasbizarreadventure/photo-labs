import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({photos}) => {
  return (
    <ul className="photo-list">
      {
        photos.map((photoItem, id) => (
          <PhotoListItem photo={photoItem} key={id}/>
        ))
      }
    </ul>
  );
};

export default PhotoList;
