import { EventModel } from "../models/models";
import events from "../../data/events-data.json";

const database = events as EventModel[];

export const getAllEvents = async (): Promise<EventModel[]> => {
  return database;
};
