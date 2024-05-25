import React, { useState } from "react";

import PhotoDetailsModal from "routes/PhotoDetailsModal";
import HomeRoute from "routes/HomeRoute";

import topics from "mocks/topics";
import photos from "mocks/photos";
import useApplicationData from "hooks/useApplicationData";
import useApplicationDataRedux from "hooks/useReducerApplications";

import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    toggleFavourite,
    closeModal,
    selectPhoto,
    selectedPhoto,
    isFavPhotoExist,
    favourite,
  } = useApplicationDataRedux();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        selectPhoto={selectPhoto}
        toggleFavourite={toggleFavourite}
        favourite={favourite}
        isFavPhotoExist={isFavPhotoExist}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          closeModal={closeModal}
          selectedPhoto={selectedPhoto}
          selectPhoto={selectPhoto}
          toggleFavourite={toggleFavourite}
          favourite={favourite}
        />
      )}
    </div>
  );
};

export default App;
