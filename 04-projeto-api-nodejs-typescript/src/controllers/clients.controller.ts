import { IncomingMessage, ServerResponse } from 'http';
import { serviceListClients } from '../services/clients.service';

export const getClients = 
  async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = await serviceListClients();
    res.end(data);
};