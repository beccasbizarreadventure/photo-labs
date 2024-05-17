import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {


  return (
    <main className="photo-list__item">
      <img className="photo-list__image" src= {props.photo.imageSource} />
      <section className= "photo-list__user-details">
        <img className="photo-list__user-profile" src= {props.photo.profile}/>
      <section className="photo-list__user-info">
        <span className="photo-list__user-details">{props.photo.username}</span>
        <span className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</span>
      </section>
      </section>
    </main>
  );
}


export default PhotoListItem;