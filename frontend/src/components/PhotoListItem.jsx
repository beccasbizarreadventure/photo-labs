import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { photo, favourite, toggleFavourite, selectPhoto } = props;

  return (
    <main className="photo-list__item">
      <PhotoFavButton toggleFavourite={toggleFavourite} favourite={favourite} />
      <img
        className="photo-list__image"
        src={photo.urls.regular}
        onClick={selectPhoto}
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
