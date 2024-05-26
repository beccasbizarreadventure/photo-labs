import { useReducer } from "react";
import photos from "mocks/photos";

const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  CLOSE_MODAL: "CLOSE_MODAL",
};

///
function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favouritePhotos: [...state.favouritePhotos, payload.photoId] };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favouritePhotos: [...state.favouritePhotos.filter((id) => id !== payload.photoId)] };

    case ACTIONS.SELECT_PHOTO:
      return { ...state, selectedPhoto: photos.find((photo) => photo.id === payload.photoData.id) };

    case ACTIONS.CLOSE_MODAL:
      return { ...state, selectedPhoto: null };


    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    favouritePhotos: [],
    selectedPhoto: null,
  });

  const toggleFavourite = (photoId) => {
    state.favouritePhotos.includes(photoId) ? dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } }) :
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
  };

  const selectPhoto = (photoData) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photoData } });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const isFavPhotoExist = state.favouritePhotos.length >= 1;

  return {
    toggleFavourite,
    isFavPhotoExist,
    selectPhoto,
    closeModal,
    selectedPhoto: state.selectedPhoto,
    favourite: state.favouritePhotos,
  };
};

export default useApplicationData;
