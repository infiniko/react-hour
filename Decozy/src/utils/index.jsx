import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  const dollarAmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));

  return dollarAmt;
};

export const GenerateAmountOptions = ({ number }) => {
  return Array.from({ length: number }, (_, index) => {
    return (
      <option key={index} value={index + 1}>
        {index + 1}
      </option>
    );
  });
};
