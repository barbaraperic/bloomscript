'use client'
import React, { useEffect } from 'react'
import Prism from 'prismjs'

import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/themes/prism-tomorrow.min.css'

type Props = {
    className?: string
    title: string
}
const HighlightTitle = ({ className, title }: Props) => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <pre>
            <code className={`language-javascript`}>{title}</code>
        </pre>
    )
}

export default HighlightTitle
