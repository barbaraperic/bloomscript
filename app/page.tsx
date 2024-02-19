import CardList from './components/CardList'
import Title from './components/Title'

const cards = Array.from({ length: 6 }, (_, index) => index)

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-10">
            <h1 className="hover:animate-shake cursor-pointer">
                JavaScript methods tutorial
            </h1>
            {/* <div className='animate-move-like-a-square rounded-full h-10 w-10 bg-red-950 '></div>  */}
            <CardList cards={cards} />
        </main>
    )
}
