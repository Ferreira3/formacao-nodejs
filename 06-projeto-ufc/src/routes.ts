import { Router } from "express";
import {
  deleteFighterById,
  getFighterById,
  getFighters,
  postFighter,
  updateFighterById,
} from "./controllers/fighters-controller";

const router = Router();

router.get("/fighters", getFighters);
router.get("/fighters/:id", getFighterById);
router.post("/fighters", postFighter);
router.delete("/fighters/:id", deleteFighterById);
router.patch("/fighters/:id", updateFighterById);

export default router;
