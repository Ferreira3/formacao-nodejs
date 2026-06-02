import { Request, Response } from "express";
import { getFighterService } from "../services/fighters-services";

export const getFighters = async (req: Request, res: Response) => {
  const httpResponse = await getFighterService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};