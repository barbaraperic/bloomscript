'use client'

import { useRef } from 'react'

export default function Card({ key, title }: { key: number; title: string }) {
    const cardRef = useRef<HTMLDivElement | null>(null)

    function handlePointerMove(e) {
        console.log(e)
        const rect = cardRef.current?.getBoundingClientRect()
        console.log(rect)

        cardRef.current.style.setProperty('--x', e.clientX - rect?.left)
        cardRef.current.style.setProperty('--y', e.clientY - rect?.top)
    }

    return (
        <div
            ref={cardRef}
            onPointerMove={(e) => handlePointerMove(e)}
            key={key}
            style={
                {
                    '--i': key,
                } as any
            }
            className="feature flex justify-center items-center h-20 w-20 border border-white rounded-lg cursor-pointer "
        >
            <p className="feature-content">{title}</p>
        </div>
    )
}
