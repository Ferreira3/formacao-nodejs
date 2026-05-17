"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/server.ts
var http = __toESM(require("http"));

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

// data/products.json
var products_default = [
  { id: 1, name: "Arroz Integral 1kg", price: 7.9 },
  { id: 3, name: "Feij\xE3o Carioca 1kg", price: 8.5 },
  { id: 5, name: "Azeite de Oliva Extra Virgem 500ml", price: 34.9 },
  { id: 8, name: "Macarr\xE3o Espaguete 500g", price: 4.2 },
  { id: 11, name: "Caf\xE9 Torrado e Mo\xEDdo 250g", price: 14.5 },
  { id: 12, name: "Leite Integral UHT 1L", price: 5.8 },
  { id: 15, name: "Manteiga com Sal 200g", price: 11.9 },
  { id: 18, name: "P\xE3o de Forma Integral", price: 7.3 },
  { id: 20, name: "Queijo Mussarela Fatiado 200g", price: 13.4 },
  { id: 22, name: "Peito de Frango Resfriado 1kg", price: 19.9 },
  { id: 26, name: "Ovos Brancos Grandes 12un", price: 10.5 },
  { id: 29, name: "Iogurte Natural Integral 170g", price: 3.1 },
  { id: 32, name: "Banana Prata Kg", price: 6.5 },
  { id: 35, name: "Ma\xE7\xE3 Gala Kg", price: 9.8 },
  { id: 38, name: "Tomate Italiano Kg", price: 8.9 },
  { id: 41, name: "Cebola Linear Kg", price: 5.2 },
  { id: 43, name: "Chocolate Amargo 70% 80g", price: 9.4 },
  { id: 46, name: "Biscoito Crackers 200g", price: 4.8 },
  { id: 48, name: "Suco de Uva Integral 1L", price: 16.5 },
  { id: 50, name: "Granola Tradicional 400g", price: 15.9 }
];

// data/orders.json
var orders_default = [
  { id: 101, clientId: 1, productList: [3, 12, 35] },
  { id: 102, clientId: 2, productList: [1, 22] },
  { id: 103, clientId: 3, productList: [5, 41, 48] },
  { id: 104, clientId: 4, productList: [8, 15] },
  { id: 105, clientId: 5, productList: [11, 26, 50] },
  { id: 106, clientId: 6, productList: [18, 32] },
  { id: 107, clientId: 7, productList: [20, 43, 46] },
  { id: 108, clientId: 8, productList: [29, 38] },
  { id: 109, clientId: 9, productList: [1, 12, 41] },
  { id: 110, clientId: 10, productList: [3, 15] },
  { id: 111, clientId: 11, productList: [5, 22, 35] },
  { id: 112, clientId: 12, productList: [8, 26] },
  { id: 113, clientId: 13, productList: [11, 32, 48] },
  { id: 114, clientId: 14, productList: [18, 43] },
  { id: 115, clientId: 15, productList: [20, 38, 50] },
  { id: 116, clientId: 16, productList: [29, 46] },
  { id: 117, clientId: 17, productList: [1, 5, 15] },
  { id: 118, clientId: 18, productList: [12, 22] },
  { id: 119, clientId: 19, productList: [8, 35, 43] },
  { id: 120, clientId: 20, productList: [26, 48] }
];

// src/repositories/repositories.ts
var clientsData = () => __async(null, null, function* () {
  return clients_default;
});
var productsData = () => __async(null, null, function* () {
  return products_default;
});
var ordersData = () => __async(null, null, function* () {
  return orders_default;
});

// src/services/products.service.ts
var serviceListProducts = (req) => __async(null, null, function* () {
  var _a;
  let data = yield productsData();
  const productName = ((_a = req.url) == null ? void 0 : _a.split("?p=")[1]) || "";
  let responseFormat = {
    statusCode: 0,
    body: []
  };
  if (productName) {
    data = data.filter((product) => product.name.toLowerCase().includes(productName.toLowerCase()));
  }
  responseFormat.statusCode = data.length !== 0 ? 200 /* OK */ : 204 /* NO_CONTENT */;
  responseFormat.body = data;
  return responseFormat;
});

// src/controllers/products.controller.ts
var getProducts = (req, res) => __async(null, null, function* () {
  const content = yield serviceListProducts(req);
  res.writeHead(content.statusCode, { "Content-Type": "application/json" /* JSON */ });
  res.end(JSON.stringify(content.body));
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

// src/services/orders.service.ts
var serviceListOrders = (req) => __async(null, null, function* () {
  var _a;
  let data = yield ordersData();
  const orderId = Number(((_a = req.url) == null ? void 0 : _a.split("?p=")[1]) || "");
  let responseFormat = {
    statusCode: 0,
    body: []
  };
  if (orderId) {
    data = data.filter((order) => order.id === orderId);
  }
  responseFormat.statusCode = data.length !== 0 ? 200 /* OK */ : 204 /* NO_CONTENT */;
  responseFormat.body = data;
  return responseFormat;
});

// src/controllers/orders.controller.ts
var getOrders = (req, res) => __async(null, null, function* () {
  const content = yield serviceListOrders(req);
  res.writeHead(content.statusCode, { "Content-Type": "application/json" /* JSON */ });
  res.end(JSON.stringify(content.body));
});

// src/routes/index.ts
var handleRoutes = (req, res) => __async(null, null, function* () {
  var _a;
  const baseUrl = ((_a = req.url) == null ? void 0 : _a.split("?")[0]) || "";
  const method = req.method;
  if (baseUrl === "/api/products" /* PRODUCTS */ && method === "GET" /* GET */) {
    yield getProducts(req, res);
  } else if (baseUrl === "/api/clients" /* CLIENTS */ && method === "GET" /* GET */) {
    yield getClients(req, res);
  } else if (baseUrl === "/api/orders" /* ORDERS */ && method === "GET" /* GET */) {
    yield getOrders(req, res);
  } else {
    res.writeHead(404 /* NOT_FOUND */, { "Content-Type": "application/json" /* JSON */ });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

// src/server.ts
var PORT = process.env.PORT;
var server = http.createServer(
  (req, res) => __async(null, null, function* () {
    yield handleRoutes(req, res);
  })
);
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
