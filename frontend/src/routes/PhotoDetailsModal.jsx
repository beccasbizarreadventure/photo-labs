import React from "react";

import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";
import closeSymbol from "../assets/closeSymbol.svg";

import "../styles/PhotoDetailsModal.scss";

const PhotoDetailsModal = (props) => {
  const {
    closeModal,
    currentSelectedPhoto,
    toggleFavourite,
    selectPhoto,
    favourite,
  } = props;

  const relatedPhotosArray = Object.values(currentSelectedPhoto.similar_photos);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <section className="photo-details-modal__images">
        <PhotoFavButton
          toggleFavourite={() => toggleFavourite(currentSelectedPhoto.id)}
          favourite={favourite.includes(currentSelectedPhoto.id)}
        />
        <img
          className="photo-details-modal__image"
          src={currentSelectedPhoto.urls.full}
        />
        <section className="photo-details-modal__header">
          <section className="photo-details-modal__photographer-details">
            <img
              className="photo-details-modal__photographer-profile"
              src={currentSelectedPhoto.user.profile}
            />
            <section className="photo-details-modal__photographer-info">
              <span className="photo-details-modal__photographer-details">
                {currentSelectedPhoto.user.name}
              </span>
              <span className="photo-details-modal__photographer-location">
                {currentSelectedPhoto.location.city},{" "}
                {currentSelectedPhoto.location.country}
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
            toggleFavourite={toggleFavourite}
            favourite={favourite}
            selectPhoto={selectPhoto}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
