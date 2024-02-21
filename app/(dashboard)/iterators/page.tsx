import CardList from '@/app/components/CardList'
import { cards } from '@/utils/iteratorsCardsList'
import Link from 'next/link'
import { FiChevronLeft } from 'react-icons/fi'

export default function IteratorsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-10 space-y-5">
            <Link href="/" className="absolute left-10 top-16">
                <FiChevronLeft className="text-white w-6 h-6 hover:text-opacity-50 transition-all" />
            </Link>
            <h1 className="cursor-pointer text-2xl">Iterators array methods</h1>
            <CardList cards={cards} />
        </main>
    )
}
