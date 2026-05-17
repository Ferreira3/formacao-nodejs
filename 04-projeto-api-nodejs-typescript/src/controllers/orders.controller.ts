import { IncomingMessage, ServerResponse } from 'http';
import { serviceListOrders } from '../services/orders.service';
import { ContentType } from '../utils/content-type';
import { ResponseModel } from '../utils/interfaces';

export const getOrders = 
  async (req: IncomingMessage, res: ServerResponse) => {
    const content: ResponseModel = await serviceListOrders(req);

    res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content.body));
};