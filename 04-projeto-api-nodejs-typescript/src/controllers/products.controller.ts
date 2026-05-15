import { IncomingMessage, ServerResponse } from 'http';
import { serviceListProducts } from '../services/products.service';

export const getProducts = 
  async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = await serviceListProducts();
    res.end(data);
};