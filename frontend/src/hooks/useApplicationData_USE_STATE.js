import React, { useState } from 'react'

//// THIS IS JUST MY OWN FILE FOR REFERENCE OF USING USESTATE - IT'S NOT LINKED TO THE REST OF THE APP ///

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
 const doesFavPhotoExist = favourite.length >= 1;

 return {toggleFavourite, closeModal, selectPhoto, selectedPhoto, doesFavPhotoExist, favourite};

}

export default useApplicationData ;