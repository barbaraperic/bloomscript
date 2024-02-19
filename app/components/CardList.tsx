'use client'

import { ReactElement, useEffect, useRef, useState } from 'react'

export default function CardList({ cards }: { cards: any }) {
    const cardsRef = useRef<HTMLDivElement[]>([])

    function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
        cardsRef.current.map((element: HTMLElement) => {
            const rect = element.getBoundingClientRect()

            element.style.setProperty('--x', (e.clientX - rect.left).toString())
            element.style.setProperty('--y', (e.clientY - rect.top).toString())
        })
    }

    function addToRef(element: HTMLDivElement) {
        if (element && !cardsRef.current.includes(element)) {
            cardsRef.current.push(element)
        }
    }

    return (
        <div className="features" onPointerMove={(e) => handlePointerMove(e)}>
            {cards.map((card: any, index: number) => (
                <div ref={addToRef} key={index} className="feature">
                    <a href="#" className="feature-content">
                        <strong>{card}</strong>
                        <span>Description of the awesome feature</span>
                    </a>
                </div>
            ))}
        </div>
    )
}
