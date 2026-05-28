"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const drivers_json_1 = __importDefault(require("../data/drivers.json"));
const teams_json_1 = __importDefault(require("../data/teams.json"));
// Iniciando o servidor, definindo cors e port
const server = (0, fastify_1.default)({ logger: true });
const PORT = Number(process.env.PORT);
server.register(cors_1.default, {
    origin: '*'
});
server.listen({ port: PORT }, () => {
    console.log(`Server initiated on port ${PORT}!`);
});
// Rotas da API
// Rota dos pilotos
server.get("/drivers", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.type("application/json").code(200);
    return { drivers: drivers_json_1.default };
}));
// Rota filtrar piloto
server.get("/drivers/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id);
    const driver = drivers_json_1.default.find(d => d.id === id);
    if (!driver) {
        response.type("application/json").code(404);
        return { message: "Driver Not Found" };
    }
    response.type("application/json").code(200);
    return { driver };
}));
// Rota dos times
server.get("/teams", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.type("application/json").code(200);
    return { teams: teams_json_1.default };
}));
// Rota filtar time
server.get("/teams/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id);
    const team = teams_json_1.default.find(t => t.id === id);
    if (!team) {
        response.type("application/json").code(404);
        return { message: "Team Not Found" };
    }
    response.type("application/json").code(200);
    return { team };
}));
