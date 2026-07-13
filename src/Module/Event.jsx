import React from 'react'
import { useState } from 'react';

function Event() {
    const[count,setCount]=useState(0);
    const handelClick=()=>{
        alert('Button was clicked!!!!')
         setCount(count+1)
    }
    
   
  return (
    
    <div>
        <h3>Count:{count}</h3>
      <button onClick={handelClick}>Click me</button>
    </div>
  )
}

export default Event
