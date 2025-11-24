import { ProductsListSorting } from '@ui/components/atoms';
import { ProductsListFilter } from '@ui/components/molecules';
import {
  Slider,
  ProductsCardList,
  NewProducts,
  MiniBlog,
} from '@ui/components/organisms';

function HomePage() {
  return (<>
    <Slider style={{ marginTop: '20px', marginBottom: '40px' }} />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        columnGap: '50px',
      }}
    >
      <ProductsListFilter />

      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <ProductsListSorting />
        <ProductsCardList />
      </div>
    </div>

    <NewProducts style={{ margin: '100px 0' }} />
    <MiniBlog />
  </>);
}

export default HomePage;
