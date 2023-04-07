import React from 'react';
import './DatenTime.css'

export default function MyTask() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  let img1 = 'https://picsum.photos/200/300';
  let img2 = 'https://picsum.photos/250/300';
  let img3 = 'https://picsum.photos/300/300';
  let color = {color :'#fa9191'};



  return (
    <div className='m-5'>
      <h1 style={color} > Hello This is Chirag</h1>
      <p>Current Date: {date}</p>
      <p>Current Time: {time}</p>

      <h2 className="heading">Gallery</h2>
      <div className='img_div '>

        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
      </div>

    </div>
  )
}

