import React, { useState,useCallback } from 'react'

function Password_Genarator() {
    const [length,setlength] = useState(8);
    const [Numberallowed,setNumberallowed] = useState(false);
    const [Charallowed,setCharallowed] = useState(true);
    const [Passwd,setPasswd] = useState("")

    const passwdgen = useCallback(() => {
        let pass = ""
        let str = "qwertyuiopasdfghjklzxcvbnmZXCVBNMLKJHGFDSAQWERTYUIOP"
        if ()
    },[length,Numberallowed,Charallowed,setPasswd])

  return (
    <div>Password_Genarator</div>
  )
}

export default Password_Genarator