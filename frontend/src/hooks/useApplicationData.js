import React, { useState } from 'react'
import photos from 'mocks/photos';

const useApplicationData = () => { 

 //SELECT ONE PHOTO//
 const [selectedPhoto, setSelectedPhoto] = useState(null)
 const [favourite, setFavourite] = useState([]);


 const selectPhoto = (photoData) => {
   setSelectedPhoto(photoData);
 };

//CLOSE MODAL//
 const closeModal = () => {
   setSelectedPhoto(null);
 }

 //LIKE A PHOTO//
const toggleFavourite = (photoId) => {
 if (favourite.includes(photoId)) {
   setFavourite(prevFavourite => prevFavourite.filter(id => id !== photoId));  
 } else {
   setFavourite(prevFavourite => [...prevFavourite, photoId]);
 }
};

 //FAV PHOTO CONSTANT//
 const isFavPhotoExist = favourite.length >= 1;

 return {toggleFavourite, closeModal, selectPhoto, selectedPhoto, isFavPhotoExist, favourite};

}

export default useApplicationData ;