'use client'
import CodeSnippet from '@/app/components/CodeSnippet'
import Modal from '@/app/components/Modal'
import { iteratorsData } from '@/data/iterators'
import { usePathname } from 'next/navigation'

export default function IteratorsItemPage({
    params,
}: {
    params: { id: string }
}) {
    const { id: title } = params

    const path = usePathname()

    const method = iteratorsData.filter((item) => item.name === title)[0]

    console.log(method)
    return (
        <main className=" w-full h-full flex min-h-screen flex-col items-center space-y-5">
            <Modal title={title}>
                <div className="flex justify-start">
                    <CodeSnippet code={method.code} />
                </div>
            </Modal>
        </main>
    )
}
