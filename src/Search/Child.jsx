import React from 'react'

function Child(props) {
  return (
    <div>
        {
            props.f.map((food)=>(
                <div key={food.id}>
                    <img src={food.image} alt="" width='150'/>
                    <h2>{food.name}</h2>
                    <h3>{food.price}</h3>
                    </div>
                

            ))
        }
    </div>
  )
}

export default Child
