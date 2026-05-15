import orders from "../../data/orders.json"

export const serviceListOrders = async () => {
  const data = JSON.stringify(orders);
  return data;
}