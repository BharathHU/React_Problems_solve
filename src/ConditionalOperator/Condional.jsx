import React from 'react'

function Condional(props) {
    if(props.isLoggedin){
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h2>Plase Login</h2>
    }
  return (
    <div>
    
    </div>
  )
}

export default Condional
