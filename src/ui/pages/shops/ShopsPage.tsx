import { Breadcrumbs } from "@ui/components/atoms";
import { Map, OrderInfo } from "@ui/components/molecules";

function ShopsPage() {
  return (<>
    <Breadcrumbs items={['shops']} />
    <Map />
    <OrderInfo style={{ margin: '50px 0' }} />
  </>)
}

export default ShopsPage;
