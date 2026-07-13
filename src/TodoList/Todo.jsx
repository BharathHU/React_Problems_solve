// import React,{useState} from 'react'

// function Todo() {
//   const[task,setTask]=useState('')
//   const[data,setData]=useState([])

//   const Search=(e)=>{
//     setTask(e.target.value)
//   }
//   const addItem=()=>{
//     if(task !==''){
//       setData([...data,task])
//       setTask('')
//     }
//   }
//   const Del=(index)=>{
//   const  res=data.filter((item,i)=> i !==index)
//   setData(res)


//   }
//   return (
//     <div style={{width:'300px',height:'300px',border:'3px solid black',borderRadius:'6px',boxShadow:'0px 0px 10px',margin:'50px auto',backgroundColor:'whiteSmoke'}}>
//       <h2 style={{color:'blue'}}>Todo <span style={{color:'pink'}}><b>-</b></span> <span style={{color:'red'}}>List</span> </h2>
//       <input type="text" placeholder='Enter a Task...' onChange={Search} value={task}/>
//       <button onClick={addItem}>Add Task</button>
      
//         <ul style={{backgroundColor:'skyblue',color:'white'}}>
// {
//   data.map((item,index)=>(
//     <li key={index}>
//       {item}
//       <button onClick={()=>Del(index)}>Delete</button>
//     </li>
//   ))
// }
//         </ul>
      
//     </div>
//   )
// }

// export default Todo


import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const Search = (e) => {
    setTask(e.target.value);
  };

  const addItem = () => {
    if (task === "") {
      alert("Please Enter Your Task!");
    } else {
      setData([...data, task]);
      setTask("");
    }
  };

  const Del = (index) => {
    const res = data.filter((item, i) => i !== index);
    setData(res);
  };

  return (
    <div className="container">
      <div className="todo-card">
        <h2 className="title">
          Todo <span>List</span>
        </h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter Your Task..."
            value={task}
            onChange={Search}
          />

          <button onClick={addItem}>Add</button>
        </div>

        <ul>
          {data.map((item, index) => (
            <li key={index} className="task">
              <span style={{color:'green'}}>{item}</span>

              <button onClick={() => Del(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;