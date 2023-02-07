import React, { useState } from 'react';

const moods = {
  happy: '😁',
  sad: '🙁'
};

export default function Moods() {
  const [mood, setMood] = useState(moods.happy);
  const [color, setColor] = useState('yellow');

  function changeMood() {
    if (mood === moods.happy) {
      setMood(moods.sad);
      setColor('blue');
    } else {
      setMood(moods.happy);
      setColor('yellow');
    }
  }
  return <button onClick={changeMood} style={{
    backgroundColor: color,
    padding: '1.5rem 3rem',
    borderRadius: '15px',
    fontSize: '2rem',
    border: 'none'

  }}>
    I am so {mood}
  </button>;
}
