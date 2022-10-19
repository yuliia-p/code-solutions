import React, { useState } from 'react';
import { topics } from './data';

export default function Accordion() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClickNext() {
    index === topics.length - 1 ? setIndex(0) : setIndex(index + 1);
  }
  function handleClick(e) {
    setShowMore(!showMore);
  }

  const topic = topics[index];
  return (
    <>
      <h1>Hello there!</h1>
      <button onClick={handleClickNext}>Next</button>
      <img src={topic.img} alt={topic.name} />
      <p >{topic.name} <span style={{ color: 'blue', textDecoration: 'underline blue' }} onClick={handleClick}>Read more...</span></p>
      {showMore && <p>{topic.description}</p>}
    </>

  );
}
