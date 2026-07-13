import React from 'react'
import { useState } from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    const[step,setStep]=useState(0);
    const handelAdd=()=>{
        setCount(count+2)
        setStep(2)
    }
    const handelDel=()=>{
        if(count>2){
        setCount(count-2)
        setStep(-2)

        }
        else{
        setCount(0)
        setStep(0)
        }
    }
    const handelRese=()=>{
        setCount(0)
        setStep(0)
    }
  return (
    <div
  style={{
    width: '400px',
    margin: '100px auto',
    padding: '30px',
    backgroundColor: 'skyblue',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    textAlign: 'center'
  }}
>
     <h3>Count:{count}</h3>
      <h3>Step value:{step}</h3>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <button onClick={handelAdd}style={{height:'40px',backgroundColor:'red',borderRadius:'6px',color:'white',fontSize:'x-large'}}>Increment</button>
      <button onClick={handelDel}style={{height:'40px',backgroundColor:'green',borderRadius:'6px',color:'white',fontSize:'x-large'}}>Decrement</button>
      <button onClick={handelRese}style={{height:'40px',backgroundColor:'yellow',borderRadius:'6px',color:'white',fontSize:'x-large'}}>Reset</button>
    </div>
    </div>
  )
}

export default Counter
