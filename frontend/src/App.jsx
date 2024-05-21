import React, { useState } from 'react';

import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import HomeRoute from 'routes/HomeRoute';

import topics from 'mocks/topics';
import photos from 'mocks/photos';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  //SELECT ONE PHOTO//
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const selectPhoto = (photoId) => {
    const result = photos.find((photo) => photo.id === photoId)
    if (result) {
    setSelectedPhoto(result);
    } else {
      console.error(`No photo found with id ${photoId}`);
    };
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  }

  //LIKE A PHOTO//
const [favourite, setFavourite] = useState([]);
const toggleFavourite = (photoId) => {
  if (favourite.includes(photoId)) {
    setFavourite(prevFavourite => prevFavourite.filter(id => id !== photoId));  
  } else {
    setFavourite(prevFavourite => [...prevFavourite, photoId]);
  }
};

const isFavPhotoExist = favourite.length >= 1;

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} selectPhoto={selectPhoto} toggleFavourite={toggleFavourite} favourite={favourite} isFavPhotoExist={isFavPhotoExist}/>
      {selectedPhoto && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto} toggleFavourite={toggleFavourite} favourite={favourite} />}
    </div>
  );
};

export default App;
