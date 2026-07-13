import React,{useState} from 'react'

function Button() {
    const[data,setData]=useState("")
    const[input1,setInput1]=useState('')
    const[store,setStore]=useState([])
    const[form,setForm]=useState('Form is Empty')
    const handelClick=()=>{
        setData("Button Clicked")
    }
    const Click1=()=>{
        setStore([...store,input1])
        setInput1('')
    }
const Remove=(index)=>{
    const res=store.filter((value,i)=>i!==index)
    setStore(res)
}
const FormClick=(e)=>{
    e.preventDefault()
    if(form.trim()==="") return;
    const setStore=([...store,form])
    setForm('')



}
  return (
    <div>
        <h3 style={{color:'green'}}>{data}</h3>
      <button onClick={handelClick} >Click me</button>
      <input type="text" placeholder='Enter name' onChange={(e)=>setInput1(e.target.value

      )} value={input1}/>
      <button onClick={Click1}>Save</button>
      <h3>
        <ul>
            {
        store.map((value,index)=>(
            <li key={index}>
                {value}
                <button onClick={()=>Remove(index)}>Delete</button>
            </li>
        ))}
        
          </ul>
          
        </h3>
       
   <form onSubmit={FormClick}>
    <input type="text"  placeholder='Enter name' onChange={(e)=>setForm(e.target.value)} value={form}/>
    <ul>{
        store.map((value,index)=>(
            <li key={index}>
{value}
            </li>
        ))
}</ul>
   </form>
    </div>
  )
}

export default Button
