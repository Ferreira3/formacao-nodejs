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
  deleteOneFighter: () => deleteOneFighter,
  findAndModifyFighter: () => findAndModifyFighter,
  getAllFighters: () => getAllFighters,
  getFighterById: () => getFighterById,
  insertFighter: () => insertFighter
});
module.exports = __toCommonJS(fighters_repository_exports);

// data/fighters-data.json
var fighters_data_default = [
  {
    id: 1,
    name: "Alex Pereira",
    stats: {
      record: { w: 13, l: 2, d: 0 },
      division: "Light Heavyweight",
      nickname: "Poatan",
      age: 38
    }
  },
  {
    id: 2,
    name: "Ciryl Gane",
    stats: {
      record: { w: 12, l: 2, d: 0 },
      division: "Heavyweight",
      nickname: "Bon Gamin",
      age: 36
    }
  },
  {
    id: 3,
    name: "Charles Oliveira",
    stats: {
      record: { w: 35, l: 10, d: 0 },
      division: "Lightweight",
      nickname: "Do Bronx",
      age: 36
    }
  },
  {
    id: 4,
    name: "Ilia Topuria",
    stats: {
      record: { w: 16, l: 0, d: 0 },
      division: "Featherweight",
      nickname: "El Matador",
      age: 29
    }
  },
  {
    id: 5,
    name: "Carlos Prates",
    stats: {
      record: { w: 21, l: 6, d: 0 },
      division: "Welterweight",
      nickname: "The Nightmare",
      age: 32
    }
  }
];

// src/repositories/fighters-repository.ts
var database = fighters_data_default;
var getAllFighters = () => __async(null, null, function* () {
  return database;
});
var getFighterById = (id) => __async(null, null, function* () {
  return database.find((player) => player.id === id);
});
var insertFighter = (fighter) => __async(null, null, function* () {
  database.push(fighter);
});
var deleteOneFighter = (id) => __async(null, null, function* () {
  const index = database.findIndex((fighter) => fighter.id === id);
  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }
  return false;
});
var findAndModifyFighter = (id, stats) => __async(null, null, function* () {
  const index = database.findIndex((fighter) => fighter.id === id);
  if (index !== 1) {
    database[index].stats = stats;
    return true;
  }
  return false;
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  deleteOneFighter,
  findAndModifyFighter,
  getAllFighters,
  getFighterById,
  insertFighter
});
