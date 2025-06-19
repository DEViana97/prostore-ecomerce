import ProductCard from "./produc-card";

const ProductList = ({ data, title, limit }: { data: any; title?: string; limit?: number }) => {
  const limitData = limit ? data.slice(0, limit) : data;
  return (<div>
    <h2 className="h2-bold mb-4">{title}</h2>
    {
      data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            limitData.map((product: any) => (
              <ProductCard
                key={product.slug}
                product={product} />
            ))
          }
        </div>
      ) : (
        <p>No products found</p>
      )
    }
  </div>);
}

export default ProductList;