import React from 'react';

import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';

import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ closeModal, selectedPhoto, isLiked, handleLike }) => {
  const relatedPhotosArray = Object.values(selectedPhoto.similar_photos);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton handleLike={handleLike} isLiked={isLiked} />
      <img className="photo-details-modal__image" src={selectedPhoto.urls.full} />
      <section className="photo-details-modal__header">
        <img className="photo-details-modal__photographer-profile" src={selectedPhoto.user.profile} />
        <section className="photo-details-modal__photographer-info">
          <span className="photo-details-modal__photographer-details">{selectedPhoto.user.name}</span>
          <span className="photo-details-modal__photographer-location">{selectedPhoto.location.city}, {selectedPhoto.location.country}</span>
        </section>
      </section>
      <h3>Similar Photos</h3>
      <div>
        <PhotoList photos={relatedPhotosArray} />
      </div>
    </div>
  )
};


export default PhotoDetailsModal;
