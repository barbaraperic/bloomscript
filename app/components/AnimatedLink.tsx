import Link from 'next/link'
import React from 'react'
import useAnimatedRouter from '../hooks/useAnimatedRouter'

type Props = {
    href: string
    children: React.ReactNode
}
export default function AnimatedLink({ href, children }: Props) {
    const { animatedRoute } = useAnimatedRouter()
    return (
        <Link
            href={href}
            passHref
            onClick={() => {
                console.log('clicked')
                animatedRoute(href)
            }}
        >
            {children}
        </Link>
    )
}
