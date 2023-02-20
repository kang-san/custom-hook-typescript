import React from 'react';
import './App.css';
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div>
      <h1> typescript custom hook </h1>
        <div className='main-container'>
          <Random />
          <Tag />
        </div>
    </div>
  );
}

export default App;
