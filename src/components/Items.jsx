import React, { useState } from "react";
import FruitsCard from "./FruitsCard";

function Items() {
  const [items, setitems] = useState([
    {
      id: 1,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/022/430/921/small_2x/bunch-of-grapes-on-transparent-background-png.png",
      name: "Green Grapes",
      price: 100,
    },
    {
      id: 2,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/027/394/853/small_2x/ripe-half-of-pomegranate-fruit-isolated-png.png",
      name: "Pomegranate",
      price: 200,
    },
    {
      id: 3,
      image:'https://images.heb.com/is/image/HEBGrocery/000375017-1',
      name: "Black Grapes",
      price: 250,
    },
    {
      id: 4,
      image: "https://static.vecteezy.com/system/resources/thumbnails/027/144/576/small_2x/fresh-grapefruit-with-slice-isolated-on-transparent-background-png.png",
      name: "Grape Fruit",
      price: 300,
    },
    {
      id: 5,
      image: "https://freepngimg.com/save/7772-strawberry-png-images/400x400",
      name: "Berry",
      price: 250,
    },
    {
      id: 6,
      image: "https://freepngimg.com/thumb/lemon/5-2-lemon-png-hd.png",
      name: "lemon",
      price: 150,
    },
  ]);
  return (
    <section className="w-5/6 mx-auto grid grid-col-1 sm:grid-col-2 md:grid-cols-3 gap-16 my-10 py-10">
      {items.map((item) => (
        <FruitsCard key={item.id} fruits={item}></FruitsCard>
      ))}
    </section>
  );
}

export default Items;
