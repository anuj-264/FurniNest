// src/pages/singleProductLoader.js
import { customFetch } from '../utils';

 export const loader = async({ params }) => {
  
  const response = await customFetch(`/products/${params.id}`);
  //console.log("loader fun");
  return {product: response.data.data};
};

