'use client'
import { FiX } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function Modal({ title }: { title: string }) {
    const router = useRouter()
    return (
        <div className="w-full h-full flex justify-center">
            <h2 className="mt-10">{title}</h2>
            <button
                className="absolute right-4 top-4"
                onClick={() => router.push('/immutable')}
            >
                <FiX className="w-6 h-6 text-white" />
            </button>
        </div>
    )
}
