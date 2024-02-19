'use client'
import { useState, useEffect } from 'react'
import { useMachine } from '@xstate/react';
import loginStateMachine from '../machines/loginStateMachine';

export default function Form() {
  const [effect, setEffect] = useState(false)
  const [value, setValue] = useState("")
  
    const [loginState, sendLoginState] = useMachine(
    loginStateMachine,
  );

  useEffect(() => {
    console.log(value.length);
    if (value.length > 0) {
      sendLoginState({ type: "ACTIVE"})
    } else {
      sendLoginState({ type: "NO_INPUT"})
    }
  }, [value, sendLoginState])



  return (
    <div className="space-x-3">
        <input onChange={(e) => setValue(e.target.value)}  type="text" className={`${value.length > 0 && 'border border-blue-300'} rounded-md py-1 pl-2 outline-none"`}/>
        <button
          onClick={() => setEffect(true)}
         className={`transition ${effect && 'animate-dip'} border rounded-md px-4 py-1 border-black `} onAnimationEnd={() => setEffect(false)}
          >Submit</button>
      </div>
  )
}

