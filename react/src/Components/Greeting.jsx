
import React, { useState } from 'react';
import './Greeting.css'


export default function Greeting() {
  
  let currDate = new Date().getHours();
  let greeting = '';
  let greetStyle = { };

  if(currDate >= 1 && currDate < 12){
    greeting = 'Good Morning';
    greetStyle.color = 'green';
  }else if(currDate >= 12 && currDate < 19){
    greeting = 'Good Afternoon';
    greetStyle.color = 'orange';
  }else{
    greeting = 'Good Night';
    greetStyle.color = 'black';
    
  }

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpdateTime=()=>{
    time = new Date().toLocaleTimeString();
    setCtime(time)
  }

  setInterval(UpdateTime, 1000);

  let Cstyle = {textAlign :'center', paddingBottom: '25px', color:'gray'};

  return (
    <>
      <div className='center'>
        <h2>Hello Chirag, <span style={greetStyle}>{greeting}</span></h2>

        <h1 style={Cstyle}>{time}</h1>
      </div>
    </>
  )
}
