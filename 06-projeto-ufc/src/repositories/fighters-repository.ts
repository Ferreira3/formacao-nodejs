import { FighterModel, StatsModel } from "../models/models";
import fighters from "../../data/fighters-data.json";

const database = fighters as FighterModel[];

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

export const findAndModifyFighter = async (id: number, stats: StatsModel): Promise<boolean> => {
  const index = database.findIndex((fighter) => fighter.id === id);

  if (index !== 1) {
    database[index].stats = stats;
    return true;
  }

  return false;
};
