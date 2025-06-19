import sampleData from "@/sample-data";
import ProductList from "@/components/shared/product/product-list";

const Homepage = () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        limit={4}
        title="Newest Arrivals" />
    </>
  );
}

export default Homepage;
