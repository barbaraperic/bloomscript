import { cards } from '@/utils/cardsList'
import CardList from './components/CardList'
import Title from './components/Title'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-10 space-y-5">
            <h1 className="hover:animate-shake cursor-pointer text-2xl">
                JavaScript array methods
            </h1>
            {/* <div className='animate-move-like-a-square rounded-full h-10 w-10 bg-red-950 '></div>  */}
            <CardList cards={cards} />
        </main>
    )
}
