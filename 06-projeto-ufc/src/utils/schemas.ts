import { FighterModel, StatsModel } from "../models/models";

// Função externa para validar o modelo de stats
export const isValidStats = (stats: any): stats is StatsModel => {
  if (!stats || typeof stats !== "object") return false;

  const { division, nickname, age, record } = stats;
  if (
    typeof division !== "string" ||
    typeof nickname !== "string" ||
    typeof age !== "number" ||
    !record
  )
    return false;

  return (
    typeof record.w === "number" &&
    typeof record.l === "number" &&
    typeof record.d === "number"
  );
};

// Função externa para validar o modelo de lutador
export const isValidFighter = (fighter: any): fighter is FighterModel => {
  if (!fighter || typeof fighter !== "object") return false;

  const { id, name, stats } = fighter;
  if (typeof id !== "number" || typeof name !== "string") return false;

  return isValidStats(stats);
};
