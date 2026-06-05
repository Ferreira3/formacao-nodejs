import { Router } from "express";
import {
  deleteFighterById,
  getFighterById,
  getFighters,
  postFighter,
  updateFighterById,
} from "./controllers/fighters-controller";
import { getEvents } from "./controllers/events-controller";

const router = Router();

// Rotas dos lutadores
router.get("/fighters", getFighters);
router.get("/fighters/:id", getFighterById);
router.post("/fighters", postFighter);
router.delete("/fighters/:id", deleteFighterById);
router.patch("/fighters/:id", updateFighterById);

// Rotas dos eventos
router.get("/events", getEvents);

export default router;
