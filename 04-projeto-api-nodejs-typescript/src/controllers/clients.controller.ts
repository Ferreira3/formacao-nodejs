import { IncomingMessage, ServerResponse } from 'http';
import { serviceListClients } from '../services/clients.service';
import { ContentType } from '../utils/content-type';
import { ResponseModel } from '../utils/interfaces';

export const getClients = 
  async (req: IncomingMessage, res: ServerResponse) => {
    const content: ResponseModel = await serviceListClients(req);

    res.writeHead(content.statusCode, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content.body));
};