import { getListFighters } from "../repositories/fighters-repository";
import { noContent, ok } from "../utils/http-helper";

export const getFighterService = async () => {
  const data = await getListFighters();
  let response = null;
  
  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
}