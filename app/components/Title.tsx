'use client'

import { motion } from 'framer-motion'

const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            animate={{ '--base-hue': 210 } as any}
            initial={{ '--base-hue': 180 } as any}
            transition={{ duration: 10, loop: Infinity, ease: 'linear' }}
            style={{ width: '100%', height: '100%', textAlign: 'center' }}
        >
            <h2
                style={{
                    cursor: 'pointer',
                    color: `hsla(calc(var(--base-hue)), 100%, 50%, 1)`,
                    fontSize: '36px',
                    textTransform: 'uppercase',
                }}
            >
                {children}
            </h2>
        </motion.div>
    )
}

export default Title
