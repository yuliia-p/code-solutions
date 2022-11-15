import React from 'react';
import MyPicCarousel from './carousel';
import { myPeople } from './data';

const App = () => {
  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 100 }}>
      <MyPicCarousel show={3}>
        {MyImg(myPeople)}
      </MyPicCarousel>
    </div>
  );
};

export default App;

function MyImg(props) {
  const image = props.map(img => {
    return (
      <div key={img.id}>
        <div style={{ padding: 8 }}>
          <img src={img.url} alt="Josh" />
        </div>
      </div>
    );
  });
  return image;
}
