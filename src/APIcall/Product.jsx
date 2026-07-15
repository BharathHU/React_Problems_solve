import React,{useState,useEffect} from 'react'

function Product() {
    const[data,setData]=useState([])
    const[error,setError]=useState('')
    const [cartCount, setCartCount] = useState({});
    const[remove,setRemove]=useState('')

    useEffect(()=>{
        const fetchData= async()=>{
            try{
                let response=await fetch('https://dummyjson.com/products')
                let Result=await response.json()
                setData(Result.products)
                console.log(Result)
            }
            catch(error){
                setError("Error Fetching Data",error)
                
            }

        }
        fetchData()
    },[])

const AddItem = (id) => {
  setCartCount({
    ...cartCount,
    [id]: (cartCount[id] || 0) + 1,
  });
};
const RemoveCount = (id) => {
  if ((cartCount[id] || 0) > 0) {
    setCartCount({
      ...cartCount,
      [id]: cartCount[id] - 1,
    });
  }
};
  return (
    
    <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'40px'}}>
      <div><h2>Product Details</h2></div>
    
        {
            data.map((product,id)=>(
            <div
  style={{
    border: "2px solid black",
    boxShadow: "0px 0px 10px black",
    borderRadius: "10px",
    textAlign: "center",
    height: "fit-content",
    width: "300px",
    padding: "10px"
  }}
>
   <img
  src={product.thumbnail}
  alt={product.title}
  width="180" height={'180px'}
/>
  <p><b>Name:</b> {product.title}</p>
  <p><b>Price:</b> ₹{product.price}</p>
  <p>{product.category}</p>
  <p>{product.description.substring(0, 60)}...</p>
  <button onClick={()=>AddItem(product.id)}>Add</button>
  <p>Cart Added Items: {cartCount[product.id] || 0}</p>
  <button onClick={()=>RemoveCount(product.id)}>Remove</button>
  

</div>

            ))
        }
    </div>
  )
}


export default Product
