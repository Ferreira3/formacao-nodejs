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

// src/routes.ts
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
module.exports = __toCommonJS(routes_exports);
var import_express = require("express");

// src/repositories/fighters-repository.ts
var database = [
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
  }
  return database[index];
});

// src/utils/http-helper.ts
var ok = (data) => __async(null, null, function* () {
  return {
    statusCode: 200,
    body: data
  };
});
var noContent = () => __async(null, null, function* () {
  return {
    statusCode: 204,
    body: null
  };
});
var badRequest = () => __async(null, null, function* () {
  return {
    statusCode: 400,
    body: null
  };
});
var created = () => __async(null, null, function* () {
  return {
    statusCode: 201,
    body: {
      message: "successful"
    }
  };
});

// src/services/fighters-services.ts
var getFightersService = () => __async(null, null, function* () {
  const data = yield getAllFighters();
  let response = null;
  if (data) {
    response = yield ok(data);
  } else {
    response = yield noContent();
  }
  return response;
});
var getFighterByIdService = (id) => __async(null, null, function* () {
  const data = yield getFighterById(id);
  let response = null;
  if (data) {
    response = yield ok(data);
  } else {
    response = yield noContent();
  }
  return response;
});
var createFighterService = (fighter) => __async(null, null, function* () {
  if (!fighter || Object.keys(fighter).length === 0) {
    return yield noContent();
  }
  const isValid = typeof fighter.id === "number" && typeof fighter.name === "string";
  if (!isValid) {
    return yield badRequest();
  }
  yield insertFighter(fighter);
  return yield created();
});
var deleteFighterByIdService = (id) => __async(null, null, function* () {
  const isDeleted = yield deleteOneFighter(id);
  if (isDeleted) {
    return yield ok({ message: "deleted" });
  } else {
    return yield badRequest();
  }
});
var updateFighterService = (id, stats) => __async(null, null, function* () {
  const data = yield findAndModifyFighter(id, stats);
  const response = yield ok(data);
  return response;
});

// src/controllers/fighters-controller.ts
var getFighters = (req, res) => __async(null, null, function* () {
  const httpResponse = yield getFightersService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var getFighterById2 = (req, res) => __async(null, null, function* () {
  const id = Number(req.params.id);
  const httpResponse = yield getFighterByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var postFighter = (req, res) => __async(null, null, function* () {
  const bodyValue = req.body;
  const httpResponse = yield createFighterService(bodyValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var deleteFighterById = (req, res) => __async(null, null, function* () {
  const id = Number(req.params.id);
  const httpResponse = yield deleteFighterByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});
var updateFighterById = (req, res) => __async(null, null, function* () {
  const id = Number(req.params.id);
  const bodyValue = req.body;
  const httpResponse = yield updateFighterService(id, bodyValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/routes.ts
var router = (0, import_express.Router)();
router.get("/fighters", getFighters);
router.get("/fighters/:id", getFighterById2);
router.post("/fighters", postFighter);
router.delete("/fighters/:id", deleteFighterById);
router.patch("/fighters/:id", updateFighterById);
var routes_default = router;
