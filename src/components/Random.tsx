import React from 'react';

function Random() {

  const handleClick = () => {
    alert('clicked');
  }

  return (
    <div className='container'>
      <h1>Random Gif</h1>
      <img src={`https://source.unsplash.com/random`} alt="random" />
      <button onClick={handleClick}> Click for now </button>
    </div>
  );
}

export default Random;
