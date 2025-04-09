import { SkillCard } from "./skillCard";
import Styles from "./style.module.css";
import { motion } from "framer-motion";

// Dummy data
const skillList = Array.from({ length: 12 });

// Group skills into rows of 4
const chunkArray = (arr: any[], size: number) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export const Skills = () => {
  const rows = chunkArray(skillList, 4);

  return (
    <div className={Styles.grid}>
      {rows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          className={Styles.row}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: rowIndex * 0.2 }}
          viewport={{ once: true, amount: 0.3 }} // triggers only when 20% of row is visible
        >
          {row.map((_, index) => (
            <motion.div
              key={index}
              className={Styles.cardWrapper}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <SkillCard />
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};
