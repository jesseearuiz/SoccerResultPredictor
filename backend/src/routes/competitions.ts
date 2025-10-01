// src/routes/competitions.ts
import { Router } from "express";
import { getCompetitions } from "../controllers/competitionController";

const router = Router();

router.get("/", getCompetitions);

// router.get("/:league/matches", async (req, res) => {
//   try {
//     const data = await fetchCompetitionMatchesRaw(req.params.league);
//     res.json(data); // dump raw Football Data response
//   } catch (error) {
//     console.error(error);
//     res.status(502).json({ error: "Unable to fetch competition matches" });
//   }
// });

export default router;
