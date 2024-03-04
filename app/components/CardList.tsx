'use client'
import styles from './CardList.module.css'
import { useRef } from 'react'
import handlePointerMove from '@/utils/handlePointerMove'
import useAnimatedRouter from '@/app/hooks/useAnimatedRouter'
import { usePathname } from 'next/navigation'

export default function CardList({ cards }: { cards: any }) {
    const cardsRef = useRef<HTMLDivElement[]>([])
    const { animatedRoute } = useAnimatedRouter()
    const path = usePathname()

    function addToRef(element: HTMLDivElement) {
        if (element && !cardsRef.current.includes(element)) {
            cardsRef.current.push(element)
        }
    }

    return (
        <div
            className={styles.features}
            onPointerMove={(e) => handlePointerMove(e, cardsRef)}
        >
            {cards.map((card: any, index: number) => (
                <div
                    ref={addToRef}
                    onClick={() => animatedRoute(`${path}/${card.title}`)}
                    className={styles.feature}
                    key={index}
                >
                    <div className={styles['feature-content']}>
                        <strong>{card.title}</strong>
                        <span>{card.description}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
