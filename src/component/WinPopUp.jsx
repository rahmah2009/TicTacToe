import React from 'react'
import x from '../assets/CombinedShapeCopy.png'
import o from '../assets/Oval Copy.png'
import { Link } from 'react-router-dom'


const WinPopUp = ({winner, cb}) => {
  return (
    <section className='w-screen h-screen fixed top-0 right-0 flex items-center justify-center bg-black/50'>
        <div className='bg-[#2f3749] p-[20px] w-[100%] flex flex-col justify-center items-center gap-[10px]'>
        <span className='text-[#a8bfc9] font-bold align-center'><span className='capitalize'>{winner} </span>WON!</span>
        <div className='flex gap-[10px] items-center'>
            <img src={winner==='x'?o:x} alt="" />
            <p className='font-bold text-[#31C3BD]'>TAKES THE ROUND</p>
        </div>
        <div className='flex justify-center items-center gap-[10px] w-full'>
            <Link to ='/' onClick={()=>cb("quit")} className='bg-[#a8bfc9] rounded-[5px] font-bold p-[8px] cursor-pointer'>QUIT</Link>
            <button onClick={()=>cb("next-round")} className='bg-[#F2B137] rounded-[5px] font-bold p-[8px] cursor-pointer'>NEXT ROUND</button>
        </div>
    </div>
    </section>
  )
}

export default WinPopUp