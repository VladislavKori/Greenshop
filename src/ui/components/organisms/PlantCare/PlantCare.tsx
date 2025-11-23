import './style.css';
import { plancare_lesson } from '@ui/configuration/plantecare.config'
import { PlantCareItem } from '@ui/components/molecules';

function PlantCare() {
  return (
    <div className="plantcare">
      <ul className="plantcare__list">
        {plancare_lesson.map(item => (
          <PlantCareItem 
            lessonNum={item.lessonNum} 
            videoUrl={item.videoUrl} 
            description={item.descript} 
          />
        ))}
      </ul>
    </div>
  )
}

export default PlantCare;
