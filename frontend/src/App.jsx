import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const sampleArray = [sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem]

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {
        sampleArray.map((photoItem, index) => (
          <PhotoListItem photo={photoItem} key={index}/>
        ))
      }
      {/* <PhotoListItem 
       photo= {sampleArray}
       key= {sampleDataForPhotoListItem.id}
      /> */}
    </div>
  );
};

export default App;
