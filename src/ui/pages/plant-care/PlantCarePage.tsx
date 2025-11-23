import { Breadcrumbs } from '@ui/components/atoms';
import { PlantCare } from '@ui/components/organisms';

function PlantCarePage() {
  return(<>
      <Breadcrumbs items={['Plante Care']} />
      <PlantCare />
  </>)
}

export default PlantCarePage;
