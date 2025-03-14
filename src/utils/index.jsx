import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const rupeesAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    //minimumFractionDigits: 0, 
  }).format((price*0.80).toFixed(2));

  return rupeesAmount;
};
export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};