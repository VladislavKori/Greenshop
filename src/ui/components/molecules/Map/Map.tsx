import { motion } from "framer-motion"
import styles from './style.module.scss'
import { CSSProperties, FC } from 'react';

export const Map: FC = () => {

  return (
    <motion.div
      className={styles["map"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <iframe 
        src="https://yandex.com/map-widget/v1/?um=constructor%3Af643c61496e7ee349811791289b633cf86c7fcd44d55de73c0ec0ed50d21c12e&amp;source=constructor" 
        width="100%" 
        height="100%" 
        frameBorder="0"
      ></iframe>
    </motion.div>
  )
}