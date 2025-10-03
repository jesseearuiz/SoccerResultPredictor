// src/routes/competitions.ts
import { Router } from "express";
import { getCompetitions } from "../controllers/competitionController";

const router = Router();

router.get("/", getCompetitions);

//move in api endpoints for teams and history so it can be imported
//into mongo and fed into a ML service
///

export default router;
