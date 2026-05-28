import fastify from "fastify";
import cors from "@fastify/cors";
import drivers from "../data/drivers.json"
import teams from "../data/teams.json"
import { IdParams } from "./utils/interfaces"

// Iniciando o servidor, definindo cors e port
const server = fastify({logger: true});
const PORT = Number(process.env.PORT);

server.register(cors, {
  origin: '*'
});

server.listen({port: PORT}, () => {
  console.log(`Server initiated on port ${PORT}!`);
});

// Rotas da API

// Rota dos pilotos
server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return { drivers };
});

// Rota filtrar piloto
server.get<{Params: IdParams }>("/drivers/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  const driver = drivers.find(d => d.id === id);

  if (!driver) {
    response.type("application/json").code(404);
    return { message: "Driver Not Found" }
  }

  response.type("application/json").code(200);
  return { driver };
});

// Rota dos times
server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return { teams };
});

// Rota filtar time
server.get<{Params: IdParams}>("/teams/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  const team = teams.find(t => t.id === id);

  if (!team) {
    response.type("application/json").code(404);
    return { message: "Team Not Found" };
  }

  response.type("application/json").code(200);
  return { team };
})
