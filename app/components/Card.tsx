'use client'

import { motion } from "framer-motion";

const Card = ({ colIndex, rowIndex, size, gap }) => {
  const diagonalIndex = (360 / 6) * (colIndex + rowIndex);


  return (
    <motion.div
      style={{
        boxShadow: `2px 2px 2px 0px rgba(0, 0, 0, .3)`,
        background: `hsla(calc(var(--base-hue)), 90%, 40%, 1)`,
        width: size,
        height: size,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        position: "absolute",
        borderRadius: "20%",
      }}
    />
  );
};


export default Card