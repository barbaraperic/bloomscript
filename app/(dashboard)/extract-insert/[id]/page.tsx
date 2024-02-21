'use client'
import Modal from '@/app/components/Modal'
import { usePathname } from 'next/navigation'

export default function ExtractInsertItemPage({
    params,
}: {
    params: { id: string }
}) {
    const { id: title } = params

    const path = usePathname()

    console.log('a', path)
    return (
        <main className=" w-full h-full flex min-h-screen flex-col items-center space-y-5">
            <Modal title={title} />
        </main>
    )
}
