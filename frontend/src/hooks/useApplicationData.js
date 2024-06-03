import { useReducer, useEffect } from "react";
import axios from "axios";


const ACTIONS = {
  ADD_FAV_PHOTO: "ADD_FAV_PHOTO",
  REMOVE_FAV_PHOTO: "REMOVE_FAV_PHOTO",
  DISPLAY_PHOTO_DATA: "SET_PHOTO_DATA",
  DISPLAY_TOPIC_DATA: "SET_TOPIC_DATA",
  DISPLAY_ALL_FAVOURITES: "DISPLAY_ALL_FAVOURITES",
  DISPLAY_FAVOURITE_PHOTOS: "DISPLAY_FAVOURITE_PHOTOS",
  SELECT_PHOTO: "SELECT_PHOTO",
  SELECT_TOPIC: "SELECT_TOPIC",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC",
  CLOSE_MODAL: "CLOSE_MODAL",
  RETURN_HOME: "RETURN_HOME"
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    // LIKE/UNLIKE A PHOTO STATE MANAGEMENT 
    case ACTIONS.ADD_FAV_PHOTO:
      return { ...state, favouritePhotos: [...state.favouritePhotos, payload.photoId] };

    case ACTIONS.REMOVE_FAV_PHOTO:
      return { ...state, favouritePhotos: [...state.favouritePhotos.filter((id) => id !== payload.photoId)] };

    case ACTIONS.DISPLAY_FAVOURITE_PHOTOS:
      return { ...state, photoData: [...state.photoData.filter((photo) => state.favouritePhotos.includes(photo.id))] };

    // STATE MANAGEMENT FOR SELECTING ONE TOPIC OR ONE PHOTO  
    // state.photoData.find using the whole photo item found by ID allows this state to function in a reusable manner
    // either from HomeRoute or in the PhotoModal, a PhotoListItem from PhotoList can be found and rendered onClick by it's ID 
    case ACTIONS.SELECT_PHOTO:
      return { ...state, currentSelectedPhoto: state.photoData.find((photo) => photo.id === payload.photo.id) };

    case ACTIONS.SELECT_TOPIC:
      return { ...state, selectedTopic: payload.topicId };

    case ACTIONS.RETURN_HOME:
      return { ...state, selectedTopic: null}

    // PHOTOS RETURNED BY SELECTED TOPIC ID  
    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return { ...state, photoData: payload.photoData };

    // HANDLE MODAL CLOSE
    // model open is dependant on currentSelectedPhoto state
    case ACTIONS.CLOSE_MODAL:
      return { ...state, currentSelectedPhoto: null };

    // DISPLAY DATA FROM DATABASE TO TOPICS AND PHOTOS IN HOMEROUTE
    case ACTIONS.DISPLAY_PHOTO_DATA:
      return { ...state, photoData: payload.allPhotoData };

    case ACTIONS.DISPLAY_TOPIC_DATA:
      return { ...state, topicData: payload.allTopicData };

    case ACTIONS.DISPLAY_ALL_FAVOURITES: 
      return { ...state, favouritePhotos: payload.allFavourites};

    default:
      return state;
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    favouritePhotos: [],
    currentSelectedPhoto: null,
    selectedTopic: null,
    photoData: [],
    topicData: [],
  });

  // FETCH FAVOURITES DATA
  useEffect(() => {
    axios.get("http://localhost:8001/api/favourites")
      .then(res => {
        const allFavourites = res.data;
        dispatch({ type: ACTIONS.DISPLAY_ALL_FAVOURITES, payload: { allFavourites } });
      })
      .catch(error => console.error("There was a problem with your fetch operation:", error));
  }, []);


  // FETCH PHOTO DATA
  useEffect(() => {
    axios.get("/api/photos")
      .then(res => {
        const allPhotoData = res.data;
        dispatch({ type: ACTIONS.DISPLAY_PHOTO_DATA, payload: { allPhotoData } });
      })
      .catch(error => console.error("There was a problem with your fetch operation:", error));
  }, []);

  // FETCH TOPIC DATA
  useEffect(() => {
    axios.get("/api/topics")
      .then(res => {
        const allTopicData = res.data;
        dispatch({ type: ACTIONS.DISPLAY_TOPIC_DATA, payload: { allTopicData } });
      })
      .catch(error => console.error("There was a problem with your fetch operation:", error));
  }, []);

  // FETCH PHOTOS FOR SPECIFIC TOPICS DATA
  useEffect(() => {
    if (state.selectedTopic) {
      axios.get(`/api/topics/photos/${state.selectedTopic}`)
        .then(res => {
          const photoData = res.data;
          dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: { photoData } });
        })
        .catch(error => console.error("There was a problem with your fetch operation:", error));
    }
  }, [state.selectedTopic]);

  // LIKE/UNLIKE A PHOTO
  const toggleFavourite = (photoId) => {
    if (state.favouritePhotos.includes(photoId)) {
      axios.delete(`/api/favourites/${photoId}`)
      .then(res => {
      dispatch({ type: ACTIONS.REMOVE_FAV_PHOTO, payload: { photoId } });
      });
    } else {
      axios.post(`/api/favourites`, { photo_id: photoId })
      .then(res => {
      dispatch({ type: ACTIONS.ADD_FAV_PHOTO, payload: { photoId } });
      });
    }
  };

  const handleShowFavourites = () => {
    dispatch({ type: ACTIONS.DISPLAY_FAVOURITE_PHOTOS });
  };

  // SELECT DATA FOR A SPECIFIC PHOTO 
  const selectPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  // SELECT A SPECIFIC TOPIC CATEGORY   
  const selectTopic = (topic) => {
    dispatch({ type: ACTIONS.SELECT_TOPIC, payload: { topicId: topic.id } });
  };

  const returnHome = () => {
    dispatch ({ type: ACTIONS.RETURN_HOME })
    axios.get("/api/photos")
    .then(res => {
      const allPhotoData = res.data;
      dispatch({ type: ACTIONS.DISPLAY_PHOTO_DATA, payload: { allPhotoData } });
    })
    .catch(error => console.error("There was a problem with your fetch operation:", error));
  }

  // CLOSE PHOTO MODAL WHEN OPEN - MODEL OPENS ON SELECTING A PHOTO 
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  // FAVOURITE PHOTO CONSTANT - FOR FAVBADGE NOTIFICATION (WILL TURN GREEN WHEN CONDITION MET)
  const doesFavPhotoExist = state.favouritePhotos.length >= 1;

  return {
    toggleFavourite,
    closeModal,
    selectPhoto,
    selectTopic,
    handleShowFavourites,
    returnHome,
    doesFavPhotoExist,
    currentSelectedPhoto: state.currentSelectedPhoto,
    favourite: state.favouritePhotos,
    photos: state.photoData,
    topics: state.topicData,
  };
};

export default useApplicationData;
