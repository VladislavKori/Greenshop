import { ProductsListSorting } from '@ui/components/atoms';
import { ProductsListFilter } from '@ui/components/molecules';
import {
  Slider,
  ProductsCardList,
  NewProducts,
  MiniBlog,
} from '@ui/components/organisms';
import styles from "./style.module.scss";

function HomePage() {
  return (<>
    <Slider style={{ marginTop: '20px', marginBottom: '40px' }} />
    <div className={styles["page-products"]}>
      <aside className={styles["page-sidebar"]}>
        <ProductsListFilter />
      </aside>

      <div className={styles["page-products-list"]}>
        <ProductsListSorting />
        <ProductsCardList />
      </div>
    </div>

    <NewProducts style={{ margin: '100px 0' }} />
    <MiniBlog />
  </>);
}

export default HomePage;
