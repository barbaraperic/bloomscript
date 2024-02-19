'use client'
import Modal from '@/app/components/Modal'

export default function ImmutableItemPage({
    params,
}: {
    params: { id: string }
}) {
    const { id: title } = params
    return (
        <div className="flex flex-col h-screen items-center justify-center bg-amber-300 gap-10">
            <h1 className="text-4xl pageHeader">Contact Page</h1>
            <p className="mx-10 pageContent text-center line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                urna auctor, viverra sapien. Donec euismod turpis eget massa
                lobortis, eget scelerisque justo.
            </p>
        </div>
        // <main className="page-header animate-slide-up w-full h-full bg-orange-100 flex min-h-screen flex-col items-center p-10 space-y-5">
        //     <Modal title={title} />
        // </main>
    )
}
