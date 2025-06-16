import React from 'react'
import CrossIcon from '../assets/CombinedshapeCopy.png'
import CircleIcon from '../assets/Oval Copy.png'

const GameBtn = ({onClick, bg, shadow, disable, xSelection, oSelection, index}) => {
  return (
    <button type='button'
    disabled={disable}
    onClick={onClick}  
    className={`p-[55px] border-none flex items-center rounded-[10px] justify-center cursor-pointer w-full`}
    style={{
      backgroundColor: bg,
      boxShadow: shadow,
    }}
    >
      {xSelection.includes(index)&&<img src={CrossIcon} alt="" />}
      
      {oSelection.includes(index)&&<img src={CircleIcon} alt="" />}
 
    </button>
  )
}

export default GameBtn