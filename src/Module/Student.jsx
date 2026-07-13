import React from 'react';

function Student({product }) {
  return (
    <div
      style={{
        width: '250px',
        border: '2px solid green',
        padding: '15px',
        margin: '10px',
        borderRadius: '10px'
      }}
    >
      <img
        src={product.image}
        alt="Product"
        width="200"
        height="200"
      />

      <h3>ID: {product.id}</h3>
      <h3>Cost: ₹{product.cost}</h3>
      <h3>Rating: ⭐ {product.rating}</h3>
    </div>
  );
}

export default Student;