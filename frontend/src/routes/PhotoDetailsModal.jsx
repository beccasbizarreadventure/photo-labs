import React from "react";

import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";
import closeSymbol from "../assets/closeSymbol.svg";

import "../styles/PhotoDetailsModal.scss";

const PhotoDetailsModal = (props) => {
  const photo = props.selectedPhoto;

  const relatedPhotosArray = Object.values(photo.similar_photos);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={props.closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <section className="photo-details-modal__images">
        <PhotoFavButton
          toggleFavourite={() => props.toggleFavourite(photo.id)}
          favourite={props.favourite.includes(photo.id)}
        />
        <img className="photo-details-modal__image" src={photo.urls.full} />
        <section className="photo-details-modal__header">
          <section className="photo-details-modal__photographer-details">
            <img
              className="photo-details-modal__photographer-profile"
              src={photo.user.profile}
            />
            <section className="photo-details-modal__photographer-info">
              <span className="photo-details-modal__photographer-details">
                {photo.user.name}
              </span>
              <span className="photo-details-modal__photographer-location">
                {photo.location.city}, {photo.location.country}
              </span>
            </section>
          </section>
        </section>
      </section>
      <div className="photo-details-modal__images__list">
        <span className="photo-details-modal__top-bar">Related Photos</span>
        <div>
          <PhotoList
            photos={relatedPhotosArray}
            toggleFavourite={props.toggleFavourite}
            favourite={props.favourite}
            selectPhoto={props.selectPhoto}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
