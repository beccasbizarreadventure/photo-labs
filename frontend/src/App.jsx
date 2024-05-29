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
    handleShowFavourites,
    currentSelectedPhoto,
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
        handleShowFavourites={handleShowFavourites}
        favourite={favourite}
        doesFavPhotoExist={doesFavPhotoExist}
      />
      {currentSelectedPhoto && (
        <PhotoDetailsModal
          closeModal={closeModal}
          currentSelectedPhoto={currentSelectedPhoto}
          selectPhoto={selectPhoto}
          toggleFavourite={toggleFavourite}
          favourite={favourite}
        />
        )}
    </div>
  );
};

export default App;
