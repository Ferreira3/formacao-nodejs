import { Request, Response } from "express";
import {
  createFighterService,
  deleteFighterByIdService,
  getFighterByIdService,
  getFightersService,
  updateFighterService,
} from "../services/fighters-services";
import { StatsModel } from "../models/models";

export const getFighters = async (req: Request, res: Response) => {
  const httpResponse = await getFightersService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getFighterById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const httpResponse = await getFighterByIdService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postFighter = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await createFighterService(bodyValue);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deleteFighterById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const httpResponse = await deleteFighterByIdService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updateFighterById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const bodyValue: StatsModel = req.body;
  const httpResponse = await updateFighterService(id, bodyValue);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
