'use client'
import { FiX } from 'react-icons/fi'
import useAnimatedRouter from '../hooks/useAnimatedRouter'

export default function Modal({
    title,
    path,
}: {
    title: string
    path?: string
}) {
    const { animatedRoute } = useAnimatedRouter()

    return (
        <div className="w-full h-full flex justify-center">
            <h2 className="mt-10">{title}</h2>
            <button
                className="absolute right-4 top-4"
                onClick={() => animatedRoute('/iterators')}
            >
                <FiX className="w-6 h-6 text-white" />
            </button>
        </div>
    )
}
