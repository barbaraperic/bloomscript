import CardList from '@/app/components/CardList'
import { methodsList } from '@/utils/methodsList'
import Link from 'next/link'
import { FiChevronLeft } from 'react-icons/fi'

export default function MethodsPage({
    searchParams,
}: {
    searchParams: {
        key: string
    }
}) {
    const { key } = searchParams
    const methods = methodsList.filter((item) => item.type === key)[0]

    const titleText = {
        iterators: 'Iterator methods',
        'stack-queue': 'Stack and queue methods',
        'extract-insert': 'Extracting and inserting methods',
        'search-sort': 'Search and sort methods',
    } as any

    return (
        <main className="container">
            <Link href="/" className="absolute left-10 top-[1rem]">
                <FiChevronLeft className="text-white w-6 h-6 hover:text-opacity-50 transition-all" />
            </Link>
            <h1 className="page-title">{titleText[methods.type]}</h1>
            <CardList cards={methods.data} />
        </main>
    )
}
