import products from "../../data/products.json"

export const serviceListProducts = async () => {
  const data = JSON.stringify(products);
  return data;
}