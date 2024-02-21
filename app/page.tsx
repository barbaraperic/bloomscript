import Link from 'next/link'
import Title from './components/Title'
import Syntax from './components/HighlightTitle'

export default function Home() {
    const links = [
        {
            title: 'Iterators',
            href: '/iterators',
        },
        {
            title: 'Stack & queue',
            href: '/stack-queue',
        },
        {
            title: 'Extracting & inserting',
            href: '/extract-insert',
        },
        {
            title: 'Searching & sorting',
            href: '/search-sort',
        },
    ]

    return (
        <main className="w-full relative flex min-h-screen flex-col justify-center items-center p-10 space-y-5">
            <Title>JavaScript array methods</Title>
            <ul className="links">
                {links.map((link, index) => (
                    <li
                        key={index}
                        className="animate-stagger opacity-0"
                        style={{ '--i': index } as any}
                    >
                        <Link href={link.href}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}
