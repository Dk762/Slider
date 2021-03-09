import './App.css';
import React, { useState } from 'react';
import Dots from 'react-carousel-dots';
import images from './images';
import  './main'


//This is for veriable length of dots at bottom of slider//
var total = images.length;
var length = 0;
if(total % 6 === 0){
  length = total / 6
} else {
  length = Math.floor(total / 6) + 1
}


function App() {
  const[active,setActive] = useState(0);
  return (
    <div id="wrapper">
      <div id="carousel">
        <div id="content">
          {images.map((image) => 
            <img className = "item" src = {image.url} alt = ''/>
          )}
          </div>
      </div>
      <button id="prev" onClick = {() => setActive(active - 1)}>
      {/* use svg for round shape previous and next button */}
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />  
        </svg>
      </button>
      <button id="next" onClick = {() => setActive(active + 1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
        </svg>
      </button>
      <Dots length={length} active={active} className="react-carousel-dots-holder" />

    </div>

  );
}

export default App;
