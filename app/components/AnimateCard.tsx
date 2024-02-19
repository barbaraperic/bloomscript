'use client'

import WaveImage from '@/public/wave.jpeg'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function AnimateCard() {

  const [isExpanded, setIsExpanded] = useState(false)
  const textRef = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)


  // useEffect(() => {
  //   if (elRef.current) {
  //     const first = elRef.current.getBoundingClientRect()
  //     console.log(first);
  //   }
  // }, [])


  // requestAnimationFrame(() => {
  //   if (elRef.current) {
  //     const second = elRef.current.getBoundingClientRect()
  //     console.log("second",second);
  //   }
  // })

  function flip(fn: any, firstEls: any, lastEls = firstEls) {

    const firstRects = firstEls.map(el => el.getBoundingClientRect())
          console.log(firstRects);

    fn()

    requestAnimationFrame(() => {
      const lastRects = lastEls.map(el => el.getBoundingClientRect())
          console.log(lastRects);


      lastRects.forEach((lastRect: any, i: number) => {
          const firstRect = firstRects[i]
          const lastEl = lastEls[i]

          if (!firstRect) {
            return;
          }

          const dx = firstRect.x - lastRect.x
          const dy = firstRect.y - lastRect.y
          const dw = firstRect.width - lastRect.width
          const dh = firstRect.height - lastRect.height

          lastEl.style.setProperty('--dx', dx)
          lastEl.style.setProperty('--dy', dy)
          lastEl.style.setProperty('--dw', dw)
          lastEl.style.setProperty('--dh', dh)

          lastEl.dataset.flip = "invert"


          requestAnimationFrame(() => {
            lastEl.dataset.flip = 'play';
          });
      });
    })
  }

  function handleClick() {
    flip(() => setIsExpanded(!isExpanded), [textRef.current, cardRef.current])
  }


  return (
    <div className={`grid grid-cols-1 grid-rows-1 gap-2 w-60 h-60 aspect-square border-2 rounded-md border-black p-5 ${isExpanded ? 'grid-cols-2 w-96 h-96 ' : ''}`}>
      <div ref={cardRef} onClick={handleClick} className={`[&>[data-flip=play]>a]:font-bold rounded-md object-fill bg-fuchsia-200 flex justify-center p-3 items-center text-center w-full h-full`}><p>Click to see the text</p></div>

      <span ref={textRef} >This is a wave</span>
    </div>
  )
}