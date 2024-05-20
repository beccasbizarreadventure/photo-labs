import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo, handleLike, isLiked, selectPhoto}) => {


  return (
    <main className="photo-list__item">
      <PhotoFavButton handleLike={handleLike} isLiked={isLiked} />
      <img className="photo-list__image" src= {photo.urls.regular} onClick={() => selectPhoto(photo.id)}/>
      <section className= "photo-list__user-details">
        <img className="photo-list__user-profile" src= {photo.user.profile}/>
      <section className="photo-list__user-info">
        <span className="photo-list__user-details">{photo.user.name}</span>
        <span className="photo-list__user-location">{photo.location.city}, {photo.location.country}</span>
      </section>
      </section>
    </main>
  );
}


export default PhotoListItem;