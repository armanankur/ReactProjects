import  { useState } from 'react'

const TextAreaValidation = () => {
    const [limit,setLimit]= useState("")

    const handleChange=(e)=>{
     if(e.target.value.length <=100){
        setLimit(e.target.value)
     }
    }
  return (
    <div className='flex justify-center items-center flex-col mt-10'>
        <h2 className='text-3xl'>Feedback Form</h2>
        
        <textarea placeholder='Enter feedback ' value={limit} onChange={handleChange} className='w-60 mt-10 '/>
        <h3 className='text-cyan-500'>{limit.length} / 100</h3>
    </div>
  )
}

export default TextAreaValidation