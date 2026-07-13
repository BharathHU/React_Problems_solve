import React from 'react'
import {constData} from './College'
import { useContext } from 'react'

function Student() {
  const Data=useContext(constData)
  return (
    <div  style={{height:'50px',backgroundColor:'yellow',color:'white',textShadow:'0px 0px 10px blue'}}>
      <p>Name:{Data.name} <br />
      Age:{Data.age} <br />
      Place:
      {Data.place}</p>
    
    </div>
  )
}

export default Student
