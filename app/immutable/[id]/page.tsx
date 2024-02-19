'use client'
import Modal from '@/app/components/Modal'

export default function ImmutableItemPage({
    params,
}: {
    params: { id: string }
}) {
    const { id: title } = params
    return (
        <main className="w-full h-full flex min-h-screen flex-col items-center space-y-5">
            <Modal title={title} />
        </main>
    )
}
