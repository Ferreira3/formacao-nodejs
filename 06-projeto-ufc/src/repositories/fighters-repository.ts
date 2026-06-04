import { FighterModel, StatsModel } from "../models/models";

const database: FighterModel[] = [
  {
    id: 1,
    name: "Alex Pereira",
    stats: {
      record: { w: 13, l: 2, d: 0 },
      division: "Light Heavyweight",
      nickname: "Poatan",
      age: 38,
    },
  },
  {
    id: 2,
    name: "Ciryl Gane",
    stats: {
      record: { w: 12, l: 2, d: 0 },
      division: "Heavyweight",
      nickname: "Bon Gamin",
      age: 36,
    },
  },
  {
    id: 3,
    name: "Charles Oliveira",
    stats: {
      record: { w: 35, l: 10, d: 0 },
      division: "Lightweight",
      nickname: "Do Bronx",
      age: 36,
    },
  },
  {
    id: 4,
    name: "Ilia Topuria",
    stats: {
      record: { w: 16, l: 0, d: 0 },
      division: "Featherweight",
      nickname: "El Matador",
      age: 29,
    },
  },
  {
    id: 5,
    name: "Carlos Prates",
    stats: {
      record: { w: 21, l: 6, d: 0 },
      division: "Welterweight",
      nickname: "The Nightmare",
      age: 32,
    },
  },
];

export const getAllFighters = async (): Promise<FighterModel[]> => {
  return database;
};

export const getFighterById = async (
  id: number,
): Promise<FighterModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertFighter = async (fighter: FighterModel) => {
  database.push(fighter);
};

export const deleteOneFighter = async (id: number) => {
  const index = database.findIndex((fighter) => fighter.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyFighter = async (
  id: number,
  stats: StatsModel,
): Promise<FighterModel> => {
  const index = database.findIndex((fighter) => fighter.id === id);

  if (index !== 1) {
    database[index].stats = stats;
  }

  return database[index];
};
