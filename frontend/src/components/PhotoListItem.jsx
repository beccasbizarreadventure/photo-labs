import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const photo = props.photo;

  return (
    <main className="photo-list__item">
      <PhotoFavButton
        toggleFavourite={props.toggleFavourite}
        favourite={props.favourite}
      />
      <img
        className="photo-list__image"
        src={props.photo.urls.regular}
        onClick={props.selectPhoto}
      />
      <section className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <section className="photo-list__user-info">
          <span className="photo-list__user-details">{photo.user.name}</span>
          <span className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </span>
        </section>
      </section>
    </main>
  );
};

export default PhotoListItem;
