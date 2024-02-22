import './prism-atom-dark.css'
import './globals.css'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata = {
    title: 'bloomscript',
    description: 'JavaScript array methods',
    icons: {
        icon: '/icon.ico',
    },
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
