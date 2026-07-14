import React, { useState, useEffect } from 'react';

function Example1() {
  const [count, setCount] = useState(0);

  // ComponentDidMount
  useEffect(() => {
    console.log("Component Did Mount");

    return () => {
      console.log("Component Will Unmount");
    };
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    console.log("Component Did Update");
  }, [count]);

  return (
    <div>
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={()=> setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}

export default Example1;