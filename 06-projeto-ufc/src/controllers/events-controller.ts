import { Request, Response } from "express";
import { getEventsService } from "../services/events-services";

export const getEvents = async (req: Request, res: Response) => {
  const httpResponse = await getEventsService();

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
