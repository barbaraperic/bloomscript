'use client'

import { motion } from 'framer-motion'

const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            animate={{ '--base-saturation': 100 } as any}
            initial={{ '--base-saturation': 0 } as any}
            transition={{ duration: 10, loop: Infinity, ease: 'linear' }}
            style={{ width: '100%', height: '100%', textAlign: 'center' }}
        >
            <h2
                style={{
                    cursor: 'pointer',
                    color: `hsla(40, calc(var(--base-saturation) * 1%), 40%, 1)`,
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
