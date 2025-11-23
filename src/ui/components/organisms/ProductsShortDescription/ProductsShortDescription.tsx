import { CSSProperties } from 'react'
import { Previewer, Manage } from '@ui/components/atoms'
import './style.css'

function ProductsShortDescription({ styles }: { styles: CSSProperties }) {
  return (
    <div className="productsShortDescription" style={styles}>
      <Previewer />
      <Manage />
    </div>
  );
}

export default ProductsShortDescription;
