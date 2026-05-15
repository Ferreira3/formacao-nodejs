import * as http from 'http';
import { handleRoutes } from './routes';

const PORT = process.env.PORT;

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    await handleRoutes(req, res);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
