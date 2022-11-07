import React, { useState } from 'react';
import { myPeople } from './data';

export default function MyPicCarousel() {
  const [index, setIndex] = useState(0);

  function handleClickNext() {
    clearInterval(intervalId);
    index === myPeople.length - 1 ? setIndex(0) : setIndex(index + 1);
  }

  function handleClickPrev() {
    clearInterval(intervalId);
    index === 0 ? setIndex(myPeople.length - 1) : setIndex(index - 1);
  }
  const intervalId = setInterval(handleClickNext, 3000);
  const person = myPeople[index];

  return (
    <div className="container">
      <h1>My sketches</h1>
      <img src={`../img/${person.name}.png`} alt={person.name} />
      <p>This is
        <span style={{ color: person.color }} > {person.name}</span>
      </p>
      <p>
        ({index + 1} of {myPeople.length})
      </p>
      <i onClick={handleClickPrev} className="fa fa-thin fa-arrow-left"></i>
      <i onClick={handleClickNext} className="fa fa-thin fa-arrow-right"></i>
    </div >
  );
}
