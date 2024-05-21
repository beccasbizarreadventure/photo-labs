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
const [isLiked, setLike] = useState([]);
const handleLike = (photoId) => {
  if (isLiked.includes(photoId)) {
    setLike(prevIsLiked => prevIsLiked.filter(id => id !== photoId));  
  } else {
    setLike(prevIsLiked => [...prevIsLiked, photoId]);
  }
};

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} selectPhoto={selectPhoto} handleLike={handleLike} isLiked={isLiked}/>
      {selectedPhoto && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto} handleLike={handleLike} isLiked={isLiked} />}
    </div>
  );
};

export default App;
