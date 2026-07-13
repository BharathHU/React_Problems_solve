import React from 'react'
import Child from './Child';

function Parent() {
   const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 45000,
    image: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    name: "T-Shirt",
    category: "Clothes",
    price: 800,
    image: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    name: "Headphones",
    category: "Electronics",
    price: 2500,
    image: "https://picsum.photos/200?random=3",
  },
  {
    id: 4,
    name: "Shoes",
    category: "Footwear",
    price: 1800,
    image: "https://picsum.photos/200?random=4",
  },
  {
    id: 5,
    name: "Mobile Phone",
    category: "Electronics",
    price: 25000,
    image: "https://picsum.photos/200?random=5",
  },
  {
    id: 6,
    name: "Smart Watch",
    category: "Accessories",
    price: 5000,
    image: "https://picsum.photos/200?random=6",
  },
  {
    id: 7,
    name: "Backpack",
    category: "Bags",
    price: 1500,
    image: "https://picsum.photos/200?random=7",
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 3200,
    image: "https://picsum.photos/200?random=8",
  },
  {
    id: 9,
    name: "Jeans",
    category: "Clothes",
    price: 1200,
    image: "https://picsum.photos/200?random=9",
  },
  {
    id: 10,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 1800,
    image: "https://picsum.photos/200?random=10",
  },
];
  return (
    <div>
      {
        products.map((product)=>(
            <Child 
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
            />
        ))
      }
    </div>
  )
}

export default Parent
