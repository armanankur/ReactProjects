
import { useState } from 'react'
import { Quotes } from '../Quotes'
const RandomQuotesGenerator = () => {
    const [quotes, setQuotes]=useState("")

    const quotesGenerator=()=>{
        const randomQuotes = Math.floor(Math.random() * Quotes.length)
        setQuotes(Quotes[randomQuotes])
    }
  return (
    <div className='h-screen w-full bg-slate-800 flex justify-center items-center gap-8 flex-col p-4'>
 <h1 className='text-3xl text-slate-50 font-bold mt-10' >Random Quotes</h1>
 <p  className='text-xl text-slate-50 font-semibold mt-10'>{quotes}</p>
 <button onClick={quotesGenerator} className='h-10 w-40 bg-cyan-500 text-white rounded-xl'>Random Quotes</button>
    </div>
  )
}

export default RandomQuotesGenerator