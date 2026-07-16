import React,{useState,useEffect} from 'react'

function DigitalClock() {
  const[data,setData]=useState([])
  const[error,setError]=useState('')

  useEffect(()=>{
    const ujwal=async()=>{
      try{
      const fetchData=await fetch('https://dummyjson.com/products')
      const respone=await fetchData.json()
      setData(respone.products)
    }
    catch(error){
      console.log("Error Fetching Data",error)
      setError('Error Fetching Data')

    }
  }
  ujwal()
  },[])
  return (
    <div
  style={{
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    backgroundImage:
      'url(https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21526.jpg)',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "20px",
    backgroundAttachment:'fixed'
  }}
>{
        data.map((value,id)=>(
          <div key={value.id} style={{border:'1px solid black',height:'350px',width:'300px',borderRadius:'10px', boxShadow:'0px 0px 10px green',backgroundColor:'whitesmoke'}}>
             <img
            src={value.thumbnail}
            alt={value.title}
            style={{
              width: "90px",
              height: "150px",
              objectFit: "cover",
            }}
          />
            <p>Name:{value.title} <br />
            Price:₹ {value.price*90} <br />
            Rating:{value.rating} <br />
          {value.description.substring(0,40)}</p>
          </div>
         
          
        ))
      }
    </div>
  )
}

export default DigitalClock
