import React, { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleDelete = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleClear = () => {
    setCount(0);
  };

  return (
    <div style={style.card}>
      <h2>Count: {count}</h2>

      <div style={style.btnContainer}>
        <button
          onClick={handleClick}
          style={{ ...style.btn, ...style.addBtn }}
        >
          Add Count
        </button>

        <button
          onClick={handleDelete}
          style={{ ...style.btn, ...style.deleteBtn }}
        >
          Delete Count
        </button>

        <button
          onClick={handleClear}
          style={{ ...style.btn, ...style.clearBtn }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

const style = {
  card: {
    backgroundColor: 'whitesmoke',
    border: '1px solid black',
    width: '350px',
    height:'100px',
    margin: '290px auto',
    textAlign: 'center',
    borderRadius: '10px',
    padding: '80px 20px',
    boxShadow: '0 2px 10px rgba(26, 24, 24, 0.92)'
  },

  btnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '15px'
  },

  btn: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },

  addBtn: {
    backgroundColor: 'green',
    color: 'white'
  },

  deleteBtn: {
    backgroundColor: 'red',
    color: 'white'
  },

  clearBtn: {
    backgroundColor: 'gold',
    color: 'black'
  }
};

export default UseState;