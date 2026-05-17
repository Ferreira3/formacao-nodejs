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

// src/controllers/products.controller.ts
var products_controller_exports = {};
__export(products_controller_exports, {
  getProducts: () => getProducts
});
module.exports = __toCommonJS(products_controller_exports);

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

// src/repositories/repositories.ts
var productsData = () => __async(null, null, function* () {
  return products_default;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getProducts
});
