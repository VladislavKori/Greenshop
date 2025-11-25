import {motion} from 'framer-motion'
import type { FC } from 'react';
import type { PlantCareItemProps } from './PlantCareItem.types';
import { Typography } from '@ui/components/atoms';
import styles from "./style.module.scss";

export const PlantCareItem: FC<PlantCareItemProps> = (props) => {
    const {lessonNum, videoUrl, description} = props;
    
    return (
        <motion.li 
            className={styles["item"]}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
            <Typography variant="h1" color="black" fontStyle="bold">
                Lesson {lessonNum}
            </Typography>

            <div className={styles["item-video"]}>
                <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`Lesson ${lessonNum}`}
                />
            </div>

            <Typography variant="body" color="gray">
                {description}
            </Typography>
        </motion.li>
    )
}