import React, { useState,useCallback} from 'react'
import { useEffect } from 'react';


function Password_Genarator() {
  const [length,setlength] = useState(8);
  const [Numberallowed,setNumberallowed] = useState(false);
  const [Spcharallowed,setSpharallowed] = useState(false);
  const [Passwd,setPasswd] = useState("")

    const passwdgen = useCallback(() => {
      let pass = ""
      let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
      if(Numberallowed == true){
        str= str + "0123456789"
      }
      if(Spcharallowed == true){
        str= str + "@!#$%^&~*<>,."
      }


      for(let i = 1; i<=length; i++){
          let char = Math.floor(Math.random() * str.length + 1)
          pass = pass + str.charAt(char);
      }

      setPasswd(pass)


    }, [length,Numberallowed,Spcharallowed,setPasswd])

    useEffect(() => {passwdgen()}, [length,Numberallowed,Spcharallowed,setPasswd])
  
    return (
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 text-[#ff4500]'>
      <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
        <input className='outline-none text-[#ff4500] w-full px-3 py-1'
        type="text"
        value={passwdgen}
        placeholder='password'
        readOnly
         />
         <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
          </button>
      </div>
      <div className='flex flex-col text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'></div>
          <input className='cursor-pointer'
          type="range"
          min={8}
          max={36}
          value={length}
          onChange={(e) => {setlength(e.target.value)}}
          />
          <label>length: {length}</label>
        </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={Spcharallowed}
            onChange={() => {setSpharallowed((prev) => !prev) }
            }
            />
            <label>Spl. Characters</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={Numberallowed}
            onChange={() => {setNumberallowed((prev) => !prev) }
            }
            />
            <label>Numbers</label>
          </div>
    </div>
  )
}

export default Password_Genarator
