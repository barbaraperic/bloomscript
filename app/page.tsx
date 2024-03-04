import Title from './components/Title'
import HomepageLinksComponent from './components/HomepageLinks'

export default function Home() {
    return (
        <main className="w-full relative text-center flex min-h-screen flex-col justify-center items-center p-10 space-y-5">
            <Title>JavaScript array methods</Title>
            <HomepageLinksComponent />
            <span className="absolute bottom-5 text-sm text-neutral-100	opacity-50">
                Source: JavaScript: The Definitive Guide by David Flanagan
            </span>
        </main>
    )
}
