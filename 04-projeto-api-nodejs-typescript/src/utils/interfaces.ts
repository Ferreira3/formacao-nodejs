export interface ClientsModel {
  id: number;
  name: string;
  orders: number[];
}

export interface ProductsModel {
  id: number;
  name: string;
  price: number;
}

export interface OrdersModel {
  id: number;
  clientId: number;
  productList: number[];
}

export interface ResponseModel {
  statusCode: number;
  body: ClientsModel[] | ProductsModel[] | OrdersModel[];
}
