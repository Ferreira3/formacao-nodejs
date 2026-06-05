import { StatsModel } from "../models/models";
import {
  deleteOneFighter,
  findAndModifyFighter,
  getAllFighters,
  getFighterById,
  insertFighter,
} from "../repositories/fighters-repository";
import { isValidFighter, isValidStats } from "../utils/schemas";
import * as HttpResponse from "../utils/http-helper";

export const getFightersService = async () => {
  const data = await getAllFighters();

  if (data) {
    return await HttpResponse.ok(data);
  } else {
    return await HttpResponse.noContent();
  }
};

export const getFighterByIdService = async (id: number) => {
  const data = await getFighterById(id);

  if (data) {
    return await HttpResponse.ok(data);
  } else {
    return await HttpResponse.noContent();
  }
};

export const createFighterService = async (fighter: any) => {
  // Valida se o lutador recebido segue o modelo
  if (!isValidFighter(fighter)) {
    return await HttpResponse.badRequest();
  }

  await insertFighter(fighter);
  return await HttpResponse.created();
};

export const deleteFighterByIdService = async (id: number) => {
  const isDeleted = await deleteOneFighter(id);

  if (isDeleted) {
    return await HttpResponse.ok({ message: "deleted" });
  } else {
    return await HttpResponse.badRequest();
  }
};

export const updateFighterService = async (id: number, stats: StatsModel) => {
  if (!isValidStats(stats)) {
    return await HttpResponse.badRequest();
  }

  const isUpdated = await findAndModifyFighter(id, stats);

  if (isUpdated) {
    return await HttpResponse.ok({ message: "updated" });
  } else {
    return await HttpResponse.notFound();
  }
};
