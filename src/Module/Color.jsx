import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  const getMessage = () => {
    switch (color) {
      case "red":
        return "🚨 Danger Mode";
      case "green":
        return "✅ Success Mode";
      case "blue":
        return "ℹ️ Information Mode";
      default:
        return "⚪ Default Mode";
    }
  };

  return (
    <div
      style={{
        backgroundColor: color,
        width: "450px",
        margin: "100px auto",
        padding: "30px",
        textAlign: "center",
        border: "2px solid black",
        borderRadius: "10px",
        transition: "0.3s"
      }}
    >
      <h1>Color Changer App</h1>

      <h2>Current Color: {color}</h2>

      <h3>{getMessage()}</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "20px"
        }}
      >
        <button
          onClick={() => setColor("red")}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Red
        </button>

        <button
          onClick={() => setColor("green")}
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Green
        </button>

        <button
          onClick={() => setColor("blue")}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Blue
        </button>

        <button
          onClick={() => setColor("white")}
          style={{
            backgroundColor: "gray",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ColorChanger;