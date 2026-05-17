import { IncomingMessage } from "http";
import { clientsData } from "../repositories/repositories";
import { ClientsModel, ResponseModel } from "../utils/interfaces";
import { StatusCode } from "../utils/http-status-code";

export const serviceListClients = async (req: IncomingMessage): Promise<ResponseModel> => {
  let data = await clientsData();
  const clientId = Number(req.url?.split('?p=')[1] || '');
  let responseFormat: ResponseModel = {
    statusCode: 0,
    body: []
  }

  if (clientId) {
    data = data.filter((client: ClientsModel) => client.id === clientId);
  }

  responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
  responseFormat.body = data;
  
  return responseFormat;
}
