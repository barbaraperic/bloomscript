'use client'
import { FiX } from 'react-icons/fi'
import useAnimatedRouter from '../hooks/useAnimatedRouter'
import { usePathname } from 'next/navigation'
import HighlightTitle from './HighlightTitle'
import CodeSnippet from './CodeSnippet'

export default function Modal({
    title,
    children,
}: {
    title: string
    children: React.ReactNode
}) {
    const { animatedRoute } = useAnimatedRouter()

    const paths = usePathname()

    const path = paths
        .split('/')
        .filter((el) => el !== title)
        .filter(Boolean)
        .join()

    return (
        <div className="w-full h-full p-10">
            <div className="mt-4">
                <HighlightTitle className="mt-10 inline-block" title={title} />
            </div>
            <button
                className="absolute right-4 top-4"
                onClick={() => animatedRoute(`/${path}`)}
            >
                <FiX className="w-6 h-6 text-white" />
            </button>
            {children}
        </div>
    )
}
