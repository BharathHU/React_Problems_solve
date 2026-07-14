import React from 'react'

function List() {
    const cars=['BMW','BENZ','TAYOTA','MUSTONG','ROLLS ROYS']
    const names=['Bharath','Chaluva','Ujwal','Chandan','Vinayaka']
    const Employee=[
       {
         stack:'PFS',
         sub1:'Python',
         sub2:'Web Tech',
         sub3:'MySQL',
         sub4:'FastApi'
       }

    ]
  return (
    <div>
      <h1>Ordered List</h1>
      <ol type='A'>
        {
            cars.map((value,index)=>(
                <li key={index}>{value}</li>
            )
        )}
      </ol>
      <div>
        <h1>Un-Ordered List</h1>
        <ul type='A'>
            {
                names.map((value,index)=>(
                    <li key={index}>{value}</li>
                ))
            }
        </ul>
      </div>
      <div style={{backgroundColor:'skyblue',color:'white',boxShadow:'0px 0px 10px black',width:'100px',display:'flex',justifyContent:'center',marginLeft:'50%', textAlign:'center',borderRadius:'10px'}}>
{
    <ul>
        <>{
        Employee.map((element,index)=>(
        <li key={index} type="a"> <b>{element.stack}</b> <br />
        {element.sub1} <br />
        {element.sub2} <br />
        {element.sub3} <br />
        {element.sub4}</li>
        
        ))
    }</>
    </ul>
}
      </div>
    </div>
  )
}

export default List
