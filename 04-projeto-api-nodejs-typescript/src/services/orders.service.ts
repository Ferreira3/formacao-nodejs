import { IncomingMessage } from "http";
import { ordersData } from "../repositories/repositories";
import { OrdersModel, ResponseModel } from "../utils/interfaces";
import { StatusCode } from "../utils/http-status-code";

export const serviceListOrders = async (req: IncomingMessage): Promise<ResponseModel> => {
  let data = await ordersData();
  const orderId = Number(req.url?.split('?p=')[1] || '');
  let responseFormat: ResponseModel = {
    statusCode: 0,
    body: []
  }

  if (orderId) {
    data = data.filter((order: OrdersModel) => order.id === orderId);
  }

  responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
  responseFormat.body = data;

  return responseFormat;
}
