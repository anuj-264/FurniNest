import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";


export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    //Object.fromEntries() method transforms a list of key-value pairs into an object.
    ...new URL(request.url).searchParams.entries(), //extracts query parameters as an array of key-value pairs.
  ]); //The URL constructor in JavaScript creates a URL object from a given URL string.
  //  This object provides various properties and methods to manipulate and extract parts of the URL.
  const response = await customFetch(url, { params });

  const products = response.data.data;
  const meta = response.data.meta;
  //console.log("Products:", products);
  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
