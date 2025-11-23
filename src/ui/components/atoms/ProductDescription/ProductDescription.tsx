import './style.css';

function ProductDescription({ data }: { data: string }) {
  return (
    <div
      className="productDescription"
      dangerouslySetInnerHTML={{__html: data  }}
    />
  )
}

export default ProductDescription;
