'use client'

import { useRef } from 'react'
import handlePointerMove from '@/utils/handlePointerMove'
import useAnimatedRouter from '@/app/hooks/useAnimatedRouter'

export default function CardList({ cards }: { cards: any }) {
    const cardsRef = useRef<HTMLDivElement[]>([])
    const { animatedRoute } = useAnimatedRouter()

    function addToRef(element: HTMLDivElement) {
        if (element && !cardsRef.current.includes(element)) {
            cardsRef.current.push(element)
        }
    }

    return (
        <div
            className="features"
            onPointerMove={(e) => handlePointerMove(e, cardsRef)}
        >
            {cards.map((card: any, index: number) => (
                <div
                    ref={addToRef}
                    onClick={() => animatedRoute(`/immutable/${card.title}/`)}
                    className="feature"
                    key={index}
                >
                    <div className="feature-content">
                        <strong>{card.title}</strong>
                        <span>{card.description}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
