import {motion} from 'framer-motion'

interface IPlantCareItemProps {
    lessonNum: number;
    videoUrl: string;
    description: string;
}

function PlantCareItem(props: IPlantCareItemProps) {
    const {lessonNum, videoUrl, description} = props;
    
    return (
        <motion.li 
            className="plantcare__item"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
        >
            <h1 className="plantcare__title">Lesson {lessonNum}</h1>
            <div className="plantcare__video">
                <iframe
                    width={'100%'}
                    height={'100%'}
                    src={videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <p className="plantcare__text">{description}</p>
        </motion.li>
    )
}

export default PlantCareItem