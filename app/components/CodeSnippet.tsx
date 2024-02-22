'use client'
import React, { useEffect } from 'react'
import Prism from 'prismjs'

import 'prismjs/components/prism-jsx'
import '../prism-atom-dark.css'

const CodeSnippet = ({ code }: { code: string }) => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <pre className="flex justify-center">
            <code className={`language-javascript`}>{code}</code>
        </pre>
    )
}

export default CodeSnippet
