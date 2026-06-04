import { StatsModel } from "../models/models";
import {
  deleteOneFighter,
  findAndModifyFighter,
  getAllFighters,
  getFighterById,
  insertFighter,
} from "../repositories/fighters-repository";
import * as HttpResponse from "../utils/http-helper";

export const getFightersService = async () => {
  const data = await getAllFighters();
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const getFighterByIdService = async (id: number) => {
  const data = await getFighterById(id);
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const createFighterService = async (fighter: any) => {
  // Validando se o lutador recebido é vazio
  if (!fighter || Object.keys(fighter).length === 0) {
    return await HttpResponse.noContent();
  }

  // Validando se o modelo do lutador recebido é valido
  const isValid =
    typeof fighter.id === "number" && typeof fighter.name === "string";

  if (!isValid) {
    return await HttpResponse.badRequest();
  }

  // Retorno e adição do lutador em caso de sucesso
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
  const data = await findAndModifyFighter(id, stats);
  const response = await HttpResponse.ok(data);

  return response;
};
