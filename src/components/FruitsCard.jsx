import React from 'react'

function FruitsCard({fruits}) {
  return (
    <div className='relative shadow-xl rounded-2xl tranfrom hover:scale-105 duration-100 group'>
        <img src={fruits.image} alt={fruits.name} className='h-52 w-2/3 mx-auto object-fill' />
        <div className='flex flex-col items-center space-y-1 my-3'>
            <span>{fruits.name}</span>
            <span>$ {fruits.price}</span>
            <button className='text-green-800 mb-10 invisible group-hover:visible uppercase font-body'>Add to cart</button>
        </div>
        <span className='absolute top-4 right-3 bg-sky-400 text-white p-1 rounded text-sm font-body'>5% off</span>
    </div>
  )
}

export default FruitsCard