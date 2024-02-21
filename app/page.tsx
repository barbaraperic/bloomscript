import Link from 'next/link'
import Title from './components/Title'

export default function Home() {
    return (
        <main className="w-full relative flex min-h-screen flex-col justify-center items-center p-10 space-y-5">
            <Title>JavaScript array methods</Title>
            <ul className="links flex font-medium justify-center items-center space-x-4 ">
                <li className="link-item">
                    <Link href="/iterators">Iterators</Link>
                </li>
                <li className="link-item">
                    <Link href="/stack-queue">Stack & queue</Link>
                </li>
                <li className="link-item">
                    <Link href="/extract-insert">Extracting & inserting</Link>
                </li>{' '}
                <li className="link-item">
                    <Link href="/search-sort">Searching & sorting</Link>
                </li>
            </ul>
        </main>
    )
}
