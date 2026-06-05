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

// src/utils/schemas.ts
var schemas_exports = {};
__export(schemas_exports, {
  isValidFighter: () => isValidFighter,
  isValidStats: () => isValidStats
});
module.exports = __toCommonJS(schemas_exports);
var isValidStats = (stats) => {
  if (!stats || typeof stats !== "object") return false;
  const { division, nickname, age, record } = stats;
  if (typeof division !== "string" || typeof nickname !== "string" || typeof age !== "number" || !record)
    return false;
  return typeof record.w === "number" && typeof record.l === "number" && typeof record.d === "number";
};
var isValidFighter = (fighter) => {
  if (!fighter || typeof fighter !== "object") return false;
  const { id, name, stats } = fighter;
  if (typeof id !== "number" || typeof name !== "string") return false;
  return isValidStats(stats);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isValidFighter,
  isValidStats
});
