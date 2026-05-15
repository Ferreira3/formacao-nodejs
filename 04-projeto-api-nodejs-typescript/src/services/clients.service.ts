import clients from "../../data/clients.json"

export const serviceListClients = async () => {
  const data = JSON.stringify(clients);
  return data;
}