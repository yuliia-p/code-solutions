import React, { useState } from 'react';
import { myPeople } from './data';

export default function MyPicCarousel() {
  const [index, setIndex] = useState(0);

  function handleClickNext() {
    if (index === myPeople.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    console.log('index', index);
  }

  function handleClickPrev() {
    if (index === 0) {
      setIndex(myPeople.length - 1);
      console.log('myPeople.length', myPeople.length);
    } else {
      setIndex(index - 1);
    }
    console.log('index', index);
  }

  const person = myPeople[index];

  return (
    <div className="container">
      <h1>Hello</h1>
      <div className="flex">
        <img
          src={`../img/${person.name}.png`}
          alt={person.name}
        />
      </div>
      <button onClick={handleClickNext}>Back</button>
      <button onClick={handleClickPrev}>Next</button>
    </div >
  );
}

// function List() {
//   const listItems = myPeople.map(person =>
//     <li key={person.id}>
//       <img
//         src={`../img/${person.name}.png`}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}</b>
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }
