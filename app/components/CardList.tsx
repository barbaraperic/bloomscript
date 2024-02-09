'use client'
import { motion } from "framer-motion";
import Card from "./Card";

const grid = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];
const size = 150;
const gap = 10;

const CardList = () => {

  return (
    <div>
      <motion.div
        animate={{ "--base-hue": 100 } as any}
        initial={{ "--base-hue": 0 } as any}
        transition={{ duration: 10, loop: Infinity, ease: "linear" }}
        style={{ width: "100%", height: "100%" }}
      >
        <motion.div
          style={{
            display: "flex",
            width: (size + gap) * 4 - gap,
            height: (size + gap) * 4 - gap,
            top: "0%",
            left: "50%",
            transform: "translate(-50%, 0%)",
            position: "relative",
            perspective: 500
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((_item, colIndex) => (
              <Card
                size={size}
                gap={gap}
                rowIndex={rowIndex}
                colIndex={colIndex}
                key={rowIndex + colIndex}
              />
            ))
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CardList