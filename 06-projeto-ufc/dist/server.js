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

// src/app.ts
var import_express2 = __toESM(require("express"));

// src/routes.ts
var import_express = require("express");

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

// src/utils/schemas.ts
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
var notFound = () => __async(null, null, function* () {
  return {
    statusCode: 404,
    body: null
  };
});

// src/services/fighters-services.ts
var getFightersService = () => __async(null, null, function* () {
  const data = yield getAllFighters();
  if (data) {
    return yield ok(data);
  } else {
    return yield noContent();
  }
});
var getFighterByIdService = (id) => __async(null, null, function* () {
  const data = yield getFighterById(id);
  if (data) {
    return yield ok(data);
  } else {
    return yield noContent();
  }
});
var createFighterService = (fighter) => __async(null, null, function* () {
  if (!isValidFighter(fighter)) {
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
  if (!isValidStats(stats)) {
    return yield badRequest();
  }
  const isUpdated = yield findAndModifyFighter(id, stats);
  if (isUpdated) {
    return yield ok({ message: "updated" });
  } else {
    return yield notFound();
  }
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

// data/events-data.json
var events_data_default = [
  {
    id: "ufc-300",
    eventName: "UFC 300: Pereira vs. Hill",
    date: "2024-04-13T22:00:00Z",
    location: {
      arena: "T-Mobile Arena",
      city: "Las Vegas",
      country: "USA"
    },
    mainCard: [
      "Alex Pereira vs. Jamahal Hill",
      "Zhang Weili vs. Yan Xiaonan",
      "Justin Gaethje vs. Max Holloway",
      "Arman Tsarukyan vs. Charles Oliveira"
    ],
    prelims: [
      "Jiri Prochazka vs. Aleksandar Rakic",
      "Aljamain Sterling vs. Calvin Kattar",
      "Kayla Harrison vs. Holly Holm"
    ],
    status: "completed"
  },
  {
    id: "ufc-301",
    eventName: "UFC 301: Pantoja vs. Erceg",
    date: "2024-05-04T22:00:00Z",
    location: {
      arena: "Farmasi Arena",
      city: "Rio de Janeiro",
      country: "Brazil"
    },
    mainCard: [
      "Alexandre Pantoja vs. Steve Erceg",
      "Jonathan Martinez vs. Jos\xE9 Aldo",
      "Anthony Smith vs. Vitor Petrino"
    ],
    prelims: [
      "Joanderson Brito vs. Jack Shore",
      "Iasmin Lucindo vs. Karolina Kowalkiewicz"
    ],
    status: "completed"
  },
  {
    id: "ufc-302",
    eventName: "UFC 302: Makhachev vs. Poirier",
    date: "2024-06-01T22:00:00Z",
    location: {
      arena: "Prudential Center",
      city: "Newark",
      country: "USA"
    },
    mainCard: [
      "Islam Makhachev vs. Dustin Poirier",
      "Sean Strickland vs. Paulo Costa",
      "Kevin Holland vs. Michal Oleksiejczuk"
    ],
    prelims: [
      "Cesar Almeida vs. Roman Kopylov",
      "Grant Dawson vs. Joe Solecki"
    ],
    status: "completed"
  },
  {
    id: "ufc-fight-night-cancelled-example",
    eventName: "UFC Fight Night: Sandhagen vs. Nurmagomedov",
    date: "2023-08-05T19:00:00Z",
    location: {
      arena: "Bridgestone Arena",
      city: "Nashville",
      country: "USA"
    },
    mainCard: [
      "Cory Sandhagen vs. Umar Nurmagomedov"
    ],
    prelims: [
      "Dustin Jacoby vs. Kennedy Nzechukwu"
    ],
    status: "cancelled"
  },
  {
    id: "ufc-future-event",
    eventName: "UFC 315: Prochazka vs. Hill",
    date: "2026-08-15T22:00:00Z",
    location: {
      arena: "Jeunesse Arena",
      city: "Rio de Janeiro",
      country: "Brazil"
    },
    mainCard: [
      "Jiri Prochazka vs. Jamahal Hill",
      "Gilbert Burns vs. Sean Brady",
      "Taila Santos vs. Erin Blanchfield"
    ],
    prelims: [
      "Caio Borralho vs. Abus Magomedov",
      "Ketlen Vieira vs. Macy Chiasson"
    ],
    status: "scheduled"
  }
];

// src/repositories/events-repository.ts
var database2 = events_data_default;
var getAllEvents = () => __async(null, null, function* () {
  return database2;
});

// src/services/events-services.ts
var getEventsService = () => __async(null, null, function* () {
  const data = yield getAllEvents();
  if (data) {
    return yield ok(data);
  } else {
    return yield noContent();
  }
});

// src/controllers/events-controller.ts
var getEvents = (req, res) => __async(null, null, function* () {
  const httpResponse = yield getEventsService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
});

// src/routes.ts
var router = (0, import_express.Router)();
router.get("/fighters", getFighters);
router.get("/fighters/:id", getFighterById2);
router.post("/fighters", postFighter);
router.delete("/fighters/:id", deleteFighterById);
router.patch("/fighters/:id", updateFighterById);
router.get("/events", getEvents);
var routes_default = router;

// src/app.ts
function createApp() {
  const app2 = (0, import_express2.default)();
  app2.use((0, import_express2.json)());
  app2.use("/api", routes_default);
  return app2;
}
var app_default = createApp;

// src/server.ts
var app = app_default();
var port = process.env.PORT;
app.listen(port, () => {
  console.log(`server initiated at port ${port}`);
});
