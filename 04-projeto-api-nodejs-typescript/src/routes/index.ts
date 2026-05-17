import { IncomingMessage, ServerResponse } from 'http';
import { getProducts } from '../controllers/products.controller';
import { getClients } from '../controllers/clients.controller';
import { getOrders } from '../controllers/orders.controller';
import { Routes } from '../utils/routes';
import { Methods } from '../utils/http-methods';
import { StatusCode } from '../utils/http-status-code';
import { ContentType } from '../utils/content-type';

export const handleRoutes =
  async (req: IncomingMessage, res: ServerResponse) => {
    const baseUrl = req.url?.split('?')[0] || '';
    const method = req.method;

    if (baseUrl === Routes.PRODUCTS && method === Methods.GET) {
      await getProducts(req, res);
    } else if (baseUrl === Routes.CLIENTS && method === Methods.GET) {
      await getClients(req, res);
    } else if (baseUrl === Routes.ORDERS && method === Methods.GET) {
      await getOrders(req, res);
    } else {
      res.writeHead(StatusCode.NOT_FOUND, { 'Content-Type': ContentType.JSON });
      res.end(JSON.stringify({ message: 'Route not found' }));
    }
};
