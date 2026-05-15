import { IncomingMessage, ServerResponse } from 'http';
import { serviceListOrders } from '../services/orders.service';

export const getOrders = 
  async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = await serviceListOrders();
    res.end(data);
};