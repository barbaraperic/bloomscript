'use client'

import { motion } from "framer-motion";

const Title = ({children}: {children: React.ReactNode}) => {


  return (
      <motion.div
        animate={{ "--base-hue": 360 } as any}
        initial={{ "--base-hue": 100 } as any}
        transition={{ duration: 10, loop: Infinity, ease: "linear" }}
        style={{ width: "100%", height: "100%" }}
      >
        <h2
          style={{
            cursor: 'pointer',
            color: `hsla(calc(var(--base-hue)), 100%, 40%, 1)`,
            position: "absolute",
            fontSize: '40px'
          }}>
            {children}
        </h2>
  
      </motion.div>

  );
};

export default Title