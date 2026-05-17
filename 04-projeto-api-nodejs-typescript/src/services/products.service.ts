import { IncomingMessage } from "http";
import { productsData } from "../repositories/repositories";
import { ProductsModel, ResponseModel } from "../utils/interfaces";
import { StatusCode } from "../utils/http-status-code";

export const serviceListProducts = async (req: IncomingMessage): Promise<ResponseModel> => {
  let data = await productsData();
  const productName = req.url?.split('?p=')[1] || '';
  let responseFormat: ResponseModel = {
    statusCode: 0,
    body: []
  }

  if (productName) {
    data = data.filter((product: ProductsModel) => product.name.toLowerCase().includes(productName.toLowerCase()));
  }

  responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
  responseFormat.body = data;
  
  return responseFormat;
}
