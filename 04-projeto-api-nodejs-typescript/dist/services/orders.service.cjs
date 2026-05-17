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

// src/services/orders.service.ts
var orders_service_exports = {};
__export(orders_service_exports, {
  serviceListOrders: () => serviceListOrders
});
module.exports = __toCommonJS(orders_service_exports);

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
var ordersData = () => __async(null, null, function* () {
  return orders_default;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  serviceListOrders
});
