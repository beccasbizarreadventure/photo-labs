import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {


  return (
    <main>
      <img className="uploaded_image" src= {props.image} />
      <section className= "user-info">
        <img className="profile_image" src= {props.profilePic}/>
        <br />
        <span>{props.username}</span>
        <br />
        <span>{props.city}, {props.country}</span>
      </section>
    </main>
  );
}


export default PhotoListItem;