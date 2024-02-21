import CardList from '@/app/components/CardList'
import { stackAndQueueList } from '@/utils/stackAndQueueList'
import Link from 'next/link'
import { FiChevronLeft } from 'react-icons/fi'

export default async function StackQueuePage() {
    return (
        <main className="flex relative min-h-screen flex-col items-center p-10 ">
            <Link href="/" className="absolute left-10 top-16">
                <FiChevronLeft className="text-white w-6 h-6 hover:text-opacity-50 transition-all" />
            </Link>
            <h1 className="cursor-pointer text-2xl mb-10 uppercase">
                Stack & queue methods
            </h1>
            <CardList cards={stackAndQueueList} />
        </main>
    )
}
