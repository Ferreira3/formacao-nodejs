import { getAllEvents } from "../repositories/events-repository";
import * as HttpResponse from "../utils/http-helper";

export const getEventsService = async () => {
  const data = await getAllEvents();

  if (data) {
    return await HttpResponse.ok(data);
  } else {
    return await HttpResponse.noContent();
  }
};
