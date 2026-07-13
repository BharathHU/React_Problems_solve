import React from "react";

function Navbar(props) {
  return (
    <div>
      {/* Navbar */}
      <div
        style={{
          backgroundColor: "skyblue",
          padding: "15px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <input type="text" placeholder="Search Product" />

        <select>
          <option>All</option>
          <option>Electronics</option>
          <option>Clothes</option>
          <option>Footwear</option>
        </select>

        <button>Low → High</button>
      </div>

      {/* Product Card */}
      <div
        style={{
          width: "220px",
          border: "1px solid gray",
          padding: "15px",
          margin: "20px",
          textAlign: "center",
        }}
      >
         <img src={props.image} alt={props.name} width="150" />

  <h3>{props.name}</h3>

  <p><strong>ID:</strong> {props.id}</p>

  <p><strong>Category:</strong> {props.category}</p>

  <p><strong>Price:</strong> ₹{props.price}</p>
      </div>
    </div>
  );
}

export default Navbar;