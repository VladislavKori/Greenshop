import { Breadcrumbs } from '@ui/components/atoms';
import { Busket } from '@ui/components/molecules';
import ProductSlider from '@ui/components/molecules/ProductSlider/ProductSlider';

function BusketPage() {
  return (<>
    <Breadcrumbs items={['Shop', 'Shopping Cart']} />
    <Busket />
    <ProductSlider styles={{ margin: "50px 0" }} title="You may be interested in" />
  </>)
}

export default BusketPage;
