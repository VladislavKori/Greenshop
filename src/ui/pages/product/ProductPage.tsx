import { Breadcrumbs } from '@ui/components/molecules';
import { ProductDetail } from '@ui/components/molecules';
import ProductSlider from '@ui/components/molecules/ProductSlider/ProductSlider';
import {
  ProductsShortDescription
} from '@ui/components/organisms'

function ProductPage() {
  return (<>
    <Breadcrumbs items={['Shop']} />
    <ProductsShortDescription styles={{ margin: '20px 0', }} />
    <ProductDetail style={{ margin: "20px 0" }} />
    <ProductSlider style={{ margin: "50px 0" }} title="Releted Products" />
  </>)
}

export default ProductPage;
