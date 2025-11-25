import { Breadcrumbs } from '@ui/components/molecules';
import { PlantCareList } from '@ui/components/organisms';

function PlantCarePage() {
  return(<>
      <Breadcrumbs items={['Plante Care']} />
      <PlantCareList />
  </>)
}

export default PlantCarePage;
