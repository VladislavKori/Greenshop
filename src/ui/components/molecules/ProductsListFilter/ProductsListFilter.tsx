import './productsListFilter.css';
import { filterConfig } from '@ui/configuration/filter.config';
import { sale } from '@ui/configuration/sale.config';
import { ProductsPriceRange } from '@ui/components/atoms';

function ProductsListFilter() {
  return (
    <div className="productsListFilter">
      <div className="productsLF__wrapper">
        {/* Categories */}
        <h1 className="productsLF__filter-title">
          {filterConfig.categories.name}
        </h1>
        <ul className="productsLF__filter-list">
          {filterConfig.categories.points.map((item, index) => (
            <li className="productsLF__filter-item" key={index}>
              <a className="productsLF__filter-link" href={item.path}>
                <span className="productsLF__filter-name">{item.name}</span>
                <span className="productsLF__filter-quantity">
                  {item.quantity}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Price Range */}
        <ProductsPriceRange />

        {/* Size */}
        <h1 className="productsLF__filter-title">{filterConfig.size.name}</h1>
        <ul className="productsLF__filter-list">
          {filterConfig.size.points.map((item, index) => (
            <li className="productsLF__filter-item" key={index}>
              <a className="productsLF__filter-link" href={item.path}>
                <span className="productsLF__filter-name">{item.name}</span>
                <span className="productsLF__filter-quantity">
                  {item.quantity}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="productsLF__ad">
        <a
          className="ad__link"
          href={sale.link}
          style={{ backgroundImage: `url('${sale.img}')` }}
        />
      </div>
    </div>
  );
}

export default ProductsListFilter;
