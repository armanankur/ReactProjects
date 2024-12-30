import { useState } from 'react'

const Counter = () => {
    const [count ,setCount]=useState(0);

    const handleInc=()=>{
        setCount(count +1)
    }

    const handleDec=()=>{
        setCount(count -1)
    }

  return (
    <div className='flex justify-center items-center flex-col gap-4 mt-12'>
        <h1 className='text-slate-700 text-3xl'>Counter App</h1>
 <div className='h-12 w-12 bg-slate-800 text-white rounded-full flex justify-center items-center'>
    <h2 className='text-center font-semibold'>{count}</h2>
 </div>

  <div className='flex - justify-center items-center gap-4'>
    <button className='bg-green-600 rounded-lg p-1   h-10 w-10 text-white' onClick={handleInc}>INC</button>
    <button className='bg-purple-600 rounded-lg p-1 h-10 w-10 text-white ' onClick={handleDec}>DEC</button>
  </div>
    </div>
  )
}

export default Counter