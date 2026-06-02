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

// src/repositories/fighters-repository.ts
var fighters_repository_exports = {};
__export(fighters_repository_exports, {
  getFighterById: () => getFighterById,
  getListFighters: () => getListFighters
});
module.exports = __toCommonJS(fighters_repository_exports);
var database = [
  { id: 1, name: "alex pereira" },
  { id: 2, name: "cyril gane" },
  { id: 3, name: "charles oliveira" },
  { id: 4, name: "ilia topuria" },
  { id: 5, name: "carlos prates" }
];
var getListFighters = () => __async(null, null, function* () {
  return database;
});
var getFighterById = (id) => __async(null, null, function* () {
  return database.find((player) => player.id === id);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getFighterById,
  getListFighters
});
