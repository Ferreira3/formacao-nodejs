import { Router } from "express";
import { getFighters } from "./controllers/fighters-controller";

const router = Router();

router.get("/fighters/list", getFighters);

export default router;