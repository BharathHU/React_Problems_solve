import React from 'react'

function Table() {
    const students = [
  {
    id: 1,
    name: "Bharath",
    age: 22,
    course: "Python Full Stack",
    city: "Bengaluru",
  },
  {
    id: 2,
    name: "Rahul",
    age: 23,
    course: "Java Full Stack",
    city: "Mysuru",
  },
  {
    id: 3,
    name: "Anjali",
    age: 21,
    course: "MERN Stack",
    city: "Hubballi",
  },
  {
    id: 4,
    name: "Kiran",
    age: 24,
    course: "Data Science",
    city: "Mangaluru",
  },
  {
    id: 5,
    name: "Sneha",
    age: 22,
    course: "React JS",
    city: "Shivamogga",
  },
  {
    id: 6,
    name: "Arjun",
    age: 23,
    course: "Python",
    city: "Tumakuru",
  },
  {
    id: 7,
    name: "Priya",
    age: 21,
    course: "Angular",
    city: "Belagavi",
  },
  {
    id: 8,
    name: "Vikas",
    age: 24,
    course: "Node.js",
    city: "Davanagere",
  },
  {
    id: 9,
    name: "Deepa",
    age: 22,
    course: "UI/UX",
    city: "Ballari",
  },
  {
    id: 10,
    name: "Rohit",
    age: 25,
    course: "DevOps",
    city: "Kalaburagi",
  },
];
  return (
    <div>
       
      <table border={1} style={{backgroundColor:'yellow',boxShadow:'0px 0px 10px black',borderRadius:'10px'}}>
        <tr style={{color:'black'}}>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>City</th>
        </tr>
        {students.map((value,index)=>(
            <tr style={{color:'black',textShadow:'0px 0px 10px'}}>
                <td >{value.id}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                 <td>{value.course}</td>
                  <td>{value.city}</td>
            </tr>
        ))}
      </table>
      <table border={1}> 
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          {
            students.map((value,id)=>(
<tr>
  <td>{value.name}</td>

  <td>{value.age}</td>
</tr>
            ))
          }
          
        </tr>
      </table>
    </div>
  )
}

export default Table
