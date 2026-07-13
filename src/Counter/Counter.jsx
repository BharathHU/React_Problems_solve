import React from 'react'
import { useState } from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    const Increse=()=>{
        setCount(count+1)

    }
    const Decrese=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
const Reset=()=>{
    setCount(0)
}
  return (
    <div >
        <div style={{height:'200px',width:'250px',border:'2px solid black', borderRadius:'5px',boxShadow:'0px 0px 10px 1px black',color:'red'}}>
        <h1>Counter App</h1>
        <h3>Count is :{count}</h3>
        <section style={{display:'flex',justifyContent:'space-between',margin:'2px 5px',borderRadius:'10px'}}>
      <button onClick={Increse}>Increment</button>
      <button onClick={Decrese}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      </section>
    </div>
    </div>
  )
}

export default Counter
