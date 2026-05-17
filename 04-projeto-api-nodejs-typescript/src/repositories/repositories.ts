import clients from "../../data/clients.json"
import products from "../../data/products.json"
import orders from "../../data/orders.json"
import { ClientsModel, OrdersModel, ProductsModel } from "../utils/interfaces";

export const clientsData = async ():  Promise<ClientsModel[]> => {
  return clients;
}

export const productsData = async (): Promise<ProductsModel[]> => {
  return products;
}

export const ordersData = async (): Promise<OrdersModel[]> => {
  return orders;
}
