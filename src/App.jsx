// import React from 'react'
// import Student from './Module/Student';

// function App() {
//   const products = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//     cost: 2999,
//     rating: 4.5
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//     cost: 4999,
//     rating: 4.8
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
//     cost: 19999,
//     rating: 4.7
//   },
//   {
//     id: 4,
//     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
//     cost: 3499,
//     rating: 4.4
//   },
//   {
//     id: 5,
//     image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
//     cost: 7999,
//     rating: 4.6
//   },
//   {
//     id: 6,
//     image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
//     cost: 1499,
//     rating: 4.2
//   },
//   {
//     id: 7,
//     image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
//     cost: 2499,
//     rating: 4.3
//   },
//   {
//     id: 8,
//     image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
//     cost: 999,
//     rating: 4.1
//   },
//   {
//     id: 9,
//     image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
//     cost: 5999,
//     rating: 4.9
//   },
//   {
//     id: 10,
//     image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
//     cost: 1299,
//     rating: 4.0
//   }
// ];
//   return (
//   <div
//   style={{
//     display: 'flex',
//     justifyContent:'center',
//     flexWrap: 'wrap',
//     gap: '20px'
//   }}
// >
//   {products.map((item) => (
//     <Student key={`first-${item.id}`} product={item} />
//   ))}

//   {products.map((item) => (
//     <Student key={`second-${item.id}`} product={item} />
//   ))}
// </div>
//   )
// }

// export default App
// import React from 'react'
// import UseState from './Module/UseState'
// import Counter from './Module/Counter'
// import Color from './Module/Color'
// import Event from './Module/Event'

// function App() {
//   return (
//     <div>
//       {/* <UseState/> */}
//       {/* <Counter/> */}
//       <Color/>
//       <Event/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Counter from './Counter/Counter'
// import TodoList from './TodoList/Todo'
// import Api from './API/Api'


// function App() {
//   return (
//     <div>
// <Counter/>
// <TodoList/>
// <Api/>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Form from './Form/Form'

// function App() {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import College from './UseContextHook/College'
// import FormVal_andhandle from './FormValidation/FormVal_andhandle'
// import Form from './Form/Form'
// import Button from './Button/Button'

// function App() {
//   return (
//     <div style={{backgroundColor:'whitesmoke'}}>
//     <College/> <br />
//     <FormVal_andhandle/>
//     <Form/>
//     <Button/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import College from './UseContextHook/College'
// import Form from './Form/Form'
// import Condional from './ConditionalOperator/Condional'

// function App() {
//   return (
//     <div>
//       {/* <College/>
//       <Form/> */}
//       <Condional/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Condional from './ConditionalOperator/Condional'
// import Password from './ShowandHidePassword/Password'

// function App() {
//   return (
//     <div>
//       <Condional isLoggedin={false} username="Bharath"/>
//     <Password/>
//     </div>
//   )
// }

// export default App
// import React,{useState} from 'react'
// import Home  from './LoginLogoutToggle/Home'
// import Profile from './LoginLogoutToggle/Profile'

// const App = () => {
//   const[isLoggin,setIsLoggin]=useState(false)

//   const Toggle=()=>{
//     setIsLoggin(!isLoggin)
//   }
//   return (
//     <div>
//       <button onClick={Toggle}>{isLoggin? 'logout':'login'}</button>
//       <hr />
//       {isLoggin? <Profile/>:<Home/>}
//     </div>

//   )
// }

// export default App
// import React from 'react'
// import List from './Lists/List'
// import Table from './Table/Table'
// import Example1 from './ComponentMountUnmount/Example1'

// function App() {
//   return (
//     <div>
//       {/* <List/>
//       <Table/> */}
//       <Example1/>
//     </div>
//   )
// }

// export default App
import React from 'react'
import APIcall from './APIcall/Product'
import US from './UseEffect/US'
import DigitalClock from './DigitalClock/DigitalClock'

function App() {
  return (
    <div>
      {/* <US/> */}
      {/* <APIcall/> */}
      <DigitalClock/>
    </div>
  )
}

export default App


