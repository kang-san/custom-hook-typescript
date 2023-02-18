import React from 'react';

function Tag() {

  const handleClick = () => {
    alert('clicked');
  }

  return (
    <div className='container'>
      <h1>Tag</h1>
      <img src={`https://source.unsplash.com/random`} alt="random" />
      <input type="text" onChange={e => e.target.value}/>
      <button onClick={handleClick}> Click for now </button>
    </div>
  );
}

export default Tag;
