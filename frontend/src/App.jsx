import React, { useState } from 'react';

import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import HomeRoute from 'routes/HomeRoute';

import topics from 'mocks/topics';
import photos from 'mocks/photos';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const selectPhoto = (photoId) => {
    const result = photos.find((photo) => photo.id === photoId)
    setSelectedPhoto(result);
  }

  const closeModal = () => {
    setSelectedPhoto(null);
  }

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} selectPhoto={selectPhoto}/>
      {selectedPhoto && <PhotoDetailsModal closeModal={closeModal} />}
    </div>
  );
};

export default App;
