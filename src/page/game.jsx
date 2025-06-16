import React, { useEffect, useState } from 'react'
import GameBtn from '../component/GameBtn'
import CrossIcon from '../assets/CombinedshapeCopy.png'
import CircleIcon from '../assets/Oval Copy.png'
import CrossIconGrey from '../assets/Combined Shape Copy-grey.png'
import { useSearchParams } from 'react-router-dom'
import { GrPowerReset } from "react-icons/gr";

const Game = () => {
  const [currentPlayer, setCurrentPlayer]=useState("")
  const [xSelection, setXSelection]=useState([])
    const [oSelection, setOSelection]=useState([])
    const [winner, setWinner] = useState("")

    const [searchParams] = useSearchParams()
    const first = searchParams.get("first")??""
 
    let tiles = [1,2,3,4,5,6,7,8,9]
    const answers = [
      [1,2,3],[4,5,6],[7,8,9],[1,5,9],[7,5,3],[1,4,7],[2,5,8],[3,6,9]
    ]

    function checkResult(arr){
      const result = answers.some(answer=>answer.every(val=>arr.includes(val)))

      return result
    }
  function handleSelect(select){
    if(currentPlayer==="x"){
      setCurrentPlayer("o")
      const check = checkResult([...xSelection, select])
      setXSelection(prev=>[...prev, select])
      if (check){
        tiles=[]
        setWinner("x")
        console.log("x is the winner")
      }else{
       tiles=tiles.filter(tile=>tile!==select) 
      }
      
    }else{
    setCurrentPlayer("x") 
    const check = checkResult([...oSelection, select])
      setOSelection(prev=>[...prev, select])
      if (check){
        tiles=[]
        setWinner("o")
        console.log("o is the winner")
      }else{
       tiles=tiles.filter(tile=>tile!==select) 
      }
    }
  }

  useEffect(()=>{
    if(first){
      setCurrentPlayer(first)
    }
  }, [first])
  return (
    <main>
      <div className='flex justify-between mb-[20px]'>
        <div className='flex w-[20px] h-[20px] items'>
        <img src={CrossIcon} alt="" />
        <img src={CircleIcon} alt="" />
      </div>
      <button className='flex items-center gap-2 text-[#a8bfc9] bg-[#2f3746] shadow-lg p-[3px] h-[25px] rounded-[5px]'>
        <img src={CrossIconGrey} alt="" width={20} height={20} className='w-[20px] h-[20px]'/>
        <span className='text-[#a8bfc9] text-[1rem] font-bold'>TURN</span>
      </button>
      <button className='bg-[#a8bfc9] text-[#2f3746] font-semibold text-[1.5rem]flex items-center shadow-2xl shadow-[#a8bfc9] p-[8px] h-[25px] 
      rounded-[5px] cursor-pointer'>
        <GrPowerReset />
      </button>
      </div>
      <div className='grid grid-cols-3 gap-[15px]'>
      <GameBtn
        bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> handleSelect(1)}
         disable={winner||tiles.length<1?true:false}
         oSelection={oSelection}
         xSelection={xSelection}
         index={1}
      />
      <GameBtn
        bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> handleSelect(2)}
         disable={winner||tiles.length<1?true:false}
         oSelection={oSelection}
         xSelection={xSelection}
         index={2}
      />
      <GameBtn
        bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> handleSelect(3)}
         disable={winner||tiles.length<1?true:false}
         oSelection={oSelection}
         xSelection={xSelection}
         index={3}
      />
      
      <GameBtn
        bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> handleSelect(4)}
         disable={winner||tiles.length<1?true:false}
         oSelection={oSelection}
         xSelection={xSelection}
         index={4}
      />
      <GameBtn
        bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> handleSelect(5)}
         disable={winner||tiles.length<1?true:false}
         oSelection={oSelection}
         xSelection={xSelection}
         index={5}
      />
      <GameBtn
        bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> handleSelect(6)}
         disable={winner||tiles.length<1?true:false}
         oSelection={oSelection}
         xSelection={xSelection}
         index={6}
      />
      <GameBtn
        bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> handleSelect(7)}
         disable={winner||tiles.length<1?true:false}
         oSelection={oSelection}
         xSelection={xSelection}
         index={7}
      />
      <GameBtn
        bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> handleSelect(8)}
         disable={winner||tiles.length<1?true:false}
         oSelection={oSelection}
         xSelection={xSelection}
         index={8}
      />
      <GameBtn
        bg='rgba(47, 55, 70, 0.5)'
        shadow='0px 5px rgba(31, 29, 25, 0.5)'
         onClick={()=> handleSelect(9)}
         disable={winner||tiles.length<1?true:false}
         oSelection={oSelection}
         xSelection={xSelection}
         index={9}
      />
    </div>
    <div className='flex justify-between mt-[20px]'>
      <button className='bg-[#31C3BD] rounded-[10px] p-[3px] w-[100px] h-[50px] shadow-2xl'>
        <span>X (YOU)</span>
        <h3 className='font-bold'>0</h3>
      </button>
      <button className='bg-[#a8bfc9] rounded-[10px] p-[3px] w-[100px] h-[50px]'>
        <span>TIES</span>
        <h3 className='font-bold'>0</h3>
      </button>
      <button className='bg-[#F2B137] rounded-[10px] p-[3px] w-[100px] h-[50px]'>
        <span>O (CPU)</span>
        <h3 className='font-bold'>0</h3>
      </button>
    </div>
    </main>
  )
}

export default Game