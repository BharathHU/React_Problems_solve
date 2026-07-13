import React from 'react'
import Child from './Child';

function Parent() {
    const foodData = [
  {
    id: 1,
    name: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    price: 199,
  },
  {
    id: 2,
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    price: 349,
  },
  {
    id: 3,
    name: "Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400",
    price: 249,
  },
  {
    id: 4,
    name: "French Fries",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400",
    price: 149,
  },
  {
    id: 5,
    name: "Sandwich",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400",
    price: 179,
  },
  {
    id: 6,
    name: "Biryani",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400",
    price: 299,
  },
  {
    id: 7,
    name: "Fried Chicken",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400",
    price: 329,
  },
  {
    id: 8,
    name: "Momos",
    image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5d?w=400",
    price: 159,
  },
  {
    id: 9,
    name: "Ice Cream",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
    price: 99,
  },
  {
    id: 10,
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    price: 249,
  },
];
  return (
    <div>
      <Child f={foodData}/>
    </div>
  )
}

export default Parent
