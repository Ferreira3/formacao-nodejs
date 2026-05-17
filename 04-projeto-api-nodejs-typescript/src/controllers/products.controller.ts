import { IncomingMessage, ServerResponse } from 'http';
import { serviceListProducts } from '../services/products.service';
import { ContentType } from '../utils/content-type';
import { ResponseModel } from '../utils/interfaces';

export const getProducts = 
  async (req: IncomingMessage, res: ServerResponse) => {
    const content: ResponseModel = await serviceListProducts(req);

    res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content.body));
};