import React from 'react'

function Divider({title}) {
  return (
    <div className='relative'>
    <div className='absolute inset-0 flex items-center'>
        <div className='border border-slate-400 w-9/12 mx-auto'></div>
    </div>
    <div className='flex justify-center relative'>
        <div className='font-display text-4xl bg-white px-4'>{title}</div>
    </div>
</div>
  )
}

export default Divider