import './prism-atom-dark.css'
import './globals.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata = {
    title: 'JS tutorial',
    description: 'JavaScript tutorial',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full w-full">
            <body
                suppressHydrationWarning={true}
                className={`${quicksand.className}`}
            >
                {children}
            </body>
        </html>
    )
}
