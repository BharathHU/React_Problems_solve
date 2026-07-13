import React,{useState} from 'react'


function Password() {
  const[showpassword,setShowpassword]=useState(false)
const[password,setPassword]=useState('')
const[data,setData]=useState([])
const[error,setError]=useState('')

const addItem = () => {
  if (password.trim() === "") {
    setError("Password is required");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

  setError("");
  setData([...data, password]);
  setPassword("");
};



  const ShowHide=()=>{
    setShowpassword(!showpassword)
  }
  return (
    <div>
      <input type={showpassword? 'text':'password'} onChange={(e)=>setPassword(e.target.value)} value={password}/>
      <button onClick={ShowHide}>{showpassword? 'hide' : 'Show'}</button>
<button onClick={addItem}>Add</button>
<h3 style={{color:'red'}}>{error}</h3>
<ul>
  {
    data.map((value,index)=>(
      <li key={index}>{value}</li>
    ))
  }
</ul>
    </div>
  )
}

export default Password
