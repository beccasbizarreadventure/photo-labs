import React from "react";

import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";
import closeSymbol from "../assets/closeSymbol.svg";

import "../styles/PhotoDetailsModal.scss";

const PhotoDetailsModal = ({
  closeModal,
  selectedPhoto,
  favourite,
  toggleFavourite,
  selectPhoto
}) => {
  const relatedPhotosArray = Object.values(selectedPhoto.similar_photos);
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
          toggleFavourite={() => toggleFavourite(selectedPhoto.id)}
          favourite={favourite.includes(selectedPhoto.id)}
        />
        <img
          className="photo-details-modal__image"
          src={selectedPhoto.urls.full}
        />
        <section className="photo-details-modal__header">
          <section className="photo-details-modal__photographer-details">
            <img
              className="photo-details-modal__photographer-profile"
              src={selectedPhoto.user.profile}
            />
            <section className="photo-details-modal__photographer-info">
              <span className="photo-details-modal__photographer-details">
                {selectedPhoto.user.name}
              </span>
              <span className="photo-details-modal__photographer-location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
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
