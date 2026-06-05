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

// src/repositories/events-repository.ts
var events_repository_exports = {};
__export(events_repository_exports, {
  getAllEvents: () => getAllEvents
});
module.exports = __toCommonJS(events_repository_exports);

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
var database = events_data_default;
var getAllEvents = () => __async(null, null, function* () {
  return database;
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getAllEvents
});
