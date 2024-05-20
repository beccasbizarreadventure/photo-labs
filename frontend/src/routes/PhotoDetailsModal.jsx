import React from 'react';

import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';

import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ closeModal, selectedPhoto }) => {
  console.log(selectedPhoto);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img className="photo-details-modal__image" src={selectedPhoto.urls.regular} />
      <section className="photo-details-modal__header">
        <img className="photo-details-modal__photographer-profile" src={selectedPhoto.user.profile} />
        <section className="photo-details-modal__photographer-info">
          <span>{selectedPhoto.user.name}</span>
          <span className="photo-details-modal__photographer-location">{selectedPhoto.location.city}, {selectedPhoto.location.country}</span>
        </section>
      </section>
    </div>
  )
};


export default PhotoDetailsModal;
