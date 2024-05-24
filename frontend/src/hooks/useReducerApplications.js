import React, { useReducer } from 'react';
import photos from 'mocks/photos';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  TOGGLE_FAV_PHOTO: 'toggle_fav_photo'
};

const initialState = {
  favouritePhotos: [],
};

const isFavPhotoExist = state.favouritePhotos.length >= 1;

const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {

  const photoId = action.payload.id;
  const prevFavourites = state.favouritePhotos;

  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favouritePhotos: [...prevFavourites, photoId] };

    case ACTIONS.FAV_PHOTO_REMOVED:
      if (prevFavourites.includes(photoId)) {
        return { ...state, favouritePhotos: prevFavourites.filter(id => id !== photoId) };
      }
  }
}

const toggleFavourite = (photoId) => {
  if (state.favouritePhotos.includes(photoId)) {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId: id } });
  }
  dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId: id } });
};