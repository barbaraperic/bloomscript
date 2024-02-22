'use client'
import CodeSnippet from '@/app/components/CodeSnippet'
import Modal from '@/app/components/Modal'
import { methodsData } from '@/data/methodsData'
import { usePathname } from 'next/navigation'

export default function MethodItemPage({ params }: { params: { id: string } }) {
    const { id: title } = params

    const method = methodsData.filter((item: any) => item.name === title)[0]

    return (
        <main className=" w-full h-full flex min-h-screen flex-col items-center space-y-5">
            <Modal title={title} type={method.type}>
                <div className="flex justify-start mb-6">
                    <CodeSnippet code={method.code} />
                </div>
                <h2 className="text-2xl mb-2">When to use it?</h2>
                <p className="max-w-[75%]">{method.text}</p>
            </Modal>
        </main>
    )
}
