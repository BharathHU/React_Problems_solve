import React from 'react'
import { createContext } from 'react'
import Class from './Class'

 export const constData=createContext()
function College() {
  const Person={
    name:'Sharath',
    age:22,
    place:'Bnglr'
  }
  return (
    <div style={{height:'200px',backgroundColor:'red'}}>
      <h3>This is a Parent</h3>
    <constData.Provider value={Person}>
      <Class/>
    </constData.Provider>
    </div>
  )
}

export default College
