import React from 'react';
import MyPicCarousel from './carousel';
import { myPeople } from './data';

const App = () => {
  return (
    <>
      <h1>My sketches</h1>
      <div className='mobile-view'>
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 50 }}>
          <MyPicCarousel show={2}>
            {MyImg(myPeople)}
          </MyPicCarousel>
        </div>
      </div>
      <div className='desktop-view'>
        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 100 }}>
          <MyPicCarousel show={3}>
            {MyImg(myPeople)}
          </MyPicCarousel>
        </div>
      </div>
    </>
  );
};

export default App;

function MyImg(props) {
  const image = props.map(img => {
    return (
      <div key={img.id}>
        <div style={{ padding: 8 }}>
          <img src={img.url} alt="Josh" />
          <p style={{ color: `${img.color}` }}>{img.name}</p>
        </div>
      </div>
    );
  });
  return image;
}
