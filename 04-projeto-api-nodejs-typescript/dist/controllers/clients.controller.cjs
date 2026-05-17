"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/controllers/clients.controller.ts
var clients_controller_exports = {};
__export(clients_controller_exports, {
  getClients: () => getClients
});
module.exports = __toCommonJS(clients_controller_exports);

// data/clients.json
var clients_default = [
  { id: 1, name: "Ana Silva", orders: [3, 7] },
  { id: 2, name: "Bruno Souza", orders: [5] },
  { id: 3, name: "Carlos Lima", orders: [1, 4, 9] },
  { id: 4, name: "Daniela Costa", orders: [8, 10] },
  { id: 5, name: "Eduardo Santos", orders: [2, 6] },
  { id: 6, name: "Fernanda Oliveira", orders: [7] },
  { id: 7, name: "Gabriel Almeida", orders: [3, 5, 8] },
  { id: 8, name: "Helena Ribeiro", orders: [1, 9] },
  { id: 9, name: "Igor Carvalho", orders: [4, 6] },
  { id: 10, name: "Juliana Pereira", orders: [10] },
  { id: 11, name: "Lucas Martins", orders: [2, 5, 7] },
  { id: 12, name: "Mariana Rocha", orders: [8] },
  { id: 13, name: "Nicolas Gomes", orders: [1, 3, 6] },
  { id: 14, name: "Olivia Rodrigues", orders: [9, 10] },
  { id: 15, name: "Pedro Mendes", orders: [4, 7] },
  { id: 16, name: "Rafaela Melo", orders: [2, 8] },
  { id: 17, name: "Samuel Barbosa", orders: [5, 6, 9] },
  { id: 18, name: "Tatiane Castro", orders: [3] },
  { id: 19, name: "Vitor Cardoso", orders: [1, 7, 10] },
  { id: 20, name: "Yasmin Teixeira", orders: [4, 8] }
];

// src/repositories/repositories.ts
var clientsData = () => __async(null, null, function* () {
  return clients_default;
});

// src/services/clients.service.ts
var serviceListClients = (req) => __async(null, null, function* () {
  var _a;
  let data = yield clientsData();
  const clientId = Number(((_a = req.url) == null ? void 0 : _a.split("?p=")[1]) || "");
  let responseFormat = {
    statusCode: 0,
    body: []
  };
  if (clientId) {
    data = data.filter((client) => client.id === clientId);
  }
  responseFormat.statusCode = data.length !== 0 ? 200 /* OK */ : 204 /* NO_CONTENT */;
  responseFormat.body = data;
  return responseFormat;
});

// src/controllers/clients.controller.ts
var getClients = (req, res) => __async(null, null, function* () {
  const content = yield serviceListClients(req);
  res.writeHead(content.statusCode, { "Content-Type": "application/json" /* JSON */ });
  res.end(JSON.stringify(content.body));
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getClients
});
