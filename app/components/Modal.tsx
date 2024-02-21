'use client'
import { FiX } from 'react-icons/fi'
import useAnimatedRouter from '../hooks/useAnimatedRouter'
import { usePathname } from 'next/navigation'

export default function Modal({ title }: { title: string }) {
    const { animatedRoute } = useAnimatedRouter()

    const paths = usePathname()

    const path = paths
        .split('/')
        .filter((el) => el !== title)
        .filter(Boolean)
        .join()

    return (
        <div className="w-full h-full flex justify-center">
            <h2 className="mt-10">{title}</h2>
            <button
                className="absolute right-4 top-4"
                onClick={() => animatedRoute(`/${path}`)}
            >
                <FiX className="w-6 h-6 text-white" />
            </button>
        </div>
    )
}
