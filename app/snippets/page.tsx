'use client'
import { useState } from 'react'
import { useMachine } from '@xstate/react';
import loginStateMachine from '../machines/loginStateMachine';


export default function Snippets() {
    const [effect, setEffect] = useState(false);

  const [loginState, sendLoginState] = useMachine(
    loginStateMachine,
  );

  console.log(loginState);

  return (
    <main className="w-full h-full">
      <div className="space-x-3">
        <input type="text" className="rounded-md py-1 pl-2 outline-none"/>
        <button
          onClick={() => setEffect(true)}
         className={`transition ${effect && 'animate-dip'} border rounded-md px-4 py-1 border-black `} onAnimationEnd={() => setEffect(false)}
          >Submit</button>
      </div>
    </main>
  )
}