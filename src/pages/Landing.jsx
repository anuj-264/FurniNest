import { FeaturedProducts, Hero } from "../components";

// loader used to load data before rendering 
// a route. It allows you to fetch data and pass it to your 
// component as props. This is particularly useful for 
// ensuring that your component has all the necessary data
//  before it renders.
import { customFetch } from '../utils';
const url = '/products?featured=true';

export const loader = async () => {
  const response = await customFetch(url);
  //console.log(response);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
