import React, { useState } from 'react'
import FruitsCard from './FruitsCard'
import Divider from './Divider'

function SeasonSpecial() {

    const[items,setitems] = useState([
        {
          id: 7,
          image: "https://freepngimg.com/save/14492-orange-png/400x400",
          name: "Orange",
          price: 100,
        },
        {
          id: 1,
          image:"https://static.vecteezy.com/system/resources/thumbnails/022/430/921/small_2x/bunch-of-grapes-on-transparent-background-png.png",
          name: "Green Grapes",
          price: 100,
        },
        {
          id: 6,
          image: "https://freepngimg.com/thumb/lemon/5-2-lemon-png-hd.png",
          name: "lemon",
          price: 150,
        },
      ])
  return (
    <section className='w-5/6 mx-auto my-10'>
       <Divider title={"Season Special"}></Divider>
        <div className="grid grid-col-1 sm:grid-col-2 md:grid-cols-3 gap-16 my-10 py-10">
      {items.map((item) => (
        <FruitsCard key={item.id} fruits={item}></FruitsCard>
      ))}
    </div>
    </section>
  )
}

export default SeasonSpecial