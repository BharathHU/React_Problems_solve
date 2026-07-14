import React,{useState, useEffect} from 'react'

function US() {
    const[data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                let response= await fetch('https://dummyjson.com/products')
                let result= await response.json()
                setData(result.products)
            }
            catch(error){
                document.write("Error Fetching data:",error)
            }
        }
        fetchData()
    },[])
  return (
    <div>
        <h2 style={{color:'blue',textShadow:'0px 0px 10px yellow',fontSize:'xx-large'}}>Product List</h2>
      <ul>{
        data.map((product)=>(
            <div
  key={product.id}
  style={{
    height: "200px",
    width: "300px",
    border: "2px solid black",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "10px",
    boxShadow:'0px 0px 10px 2px yellow'
  }}
>
  <h3>{product.title}</h3>
  <p>Price: ₹{product.price}</p>
</div>
            

        ))
    }</ul>
    </div>
  )
}

export default US
