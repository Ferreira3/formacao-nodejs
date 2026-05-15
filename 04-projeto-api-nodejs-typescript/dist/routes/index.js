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

// src/routes/index.ts
var routes_exports = {};
__export(routes_exports, {
  handleRoutes: () => handleRoutes
});
module.exports = __toCommonJS(routes_exports);
var handleRoutes = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/products" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      "message": "Products route"
    }));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      "error": "Not Found"
    }));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handleRoutes
});
