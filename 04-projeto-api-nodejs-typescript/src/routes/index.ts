import { IncomingMessage, ServerResponse } from 'http';
import { getProducts } from '../controllers/products.controller';
import { getClients } from '../controllers/clients.controller';
import { getOrders } from '../controllers/orders.controller';

export const handleRoutes =
  async (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/products' && req.method === 'GET') {
      await getProducts(req, res);
    } else if (req.url === '/clients' && req.method === 'GET') {
      await getClients(req, res);
    } else if (req.url === '/orders' && req.method === 'GET') {
      await getOrders(req, res);
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Route not found' }));
    }
};
