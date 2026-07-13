import React, { useEffect, useState } from "react";
import "./Api.css";

function Api() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log("Error while fetching:", error);
        setError(true);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">🛒 Fake Store Products</h1>

      {error && <p className="error">Error while fetching data.</p>}

      {!error && !data && <p className="loading">Loading...</p>}

      {!error && data && (
        <div className="product-list">
          {data.map((ele) => (
            <div className="card" key={ele.id}>
              <img src={ele.image} alt={ele.title} />

              <h3>{ele.title}</h3>

              <p>
                <strong>Price:</strong> ${ele.price}
              </p>

              <p>
                <strong>Description:</strong>{" "}
                {ele.description.substring(0, 60)}...
              </p>

              <p>
                <strong>Category:</strong> {ele.category}
              </p>

              <p>
                <strong>Rating:</strong> ⭐ {ele.rating.rate}
              </p>

              <p>
                <strong>Reviews:</strong> {ele.rating.count}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Api;