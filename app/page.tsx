import Image from 'next/image'
import CardList from './components/CardList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
        <CardList />
    </main>
  )
}
