import CardList from '@/app/components/CardList'
import { cards } from '@/utils/cardsList'
import Link from 'next/link'

export default function ImmutablePage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-10 space-y-5">
            <h1 className="cursor-pointer text-2xl">immutable array methods</h1>

            <CardList cards={cards} />
        </main>
    )
}
