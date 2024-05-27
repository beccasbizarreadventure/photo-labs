import React from "react";

import PhotoDetailsModal from "routes/PhotoDetailsModal";
import HomeRoute from "routes/HomeRoute";

import useApplicationData from "hooks/useApplicationData";

import "./App.scss";

const App = () => {
  const {
    toggleFavourite,
    closeModal,
    selectPhoto,
    selectTopic,
    selectedPhoto,
    doesFavPhotoExist,
    favourite,
    topics,
    photos,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        selectPhoto={selectPhoto}
        selectTopic={selectTopic}
        toggleFavourite={toggleFavourite}
        favourite={favourite}
        doesFavPhotoExist={doesFavPhotoExist}
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
