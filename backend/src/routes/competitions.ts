// src/routes/competitions.ts
import { Router } from "express";
import { fetchCompetitionMatchesRaw } from "../services/footballData";

const router = Router();

router.get("/:code/matches", async (req, res) => {
  try {
    const data = await fetchCompetitionMatchesRaw(req.params.code);
    res.json(data); // dump raw Football Data response
  } catch (error) {
    console.error(error);
    res.status(502).json({ error: "Unable to fetch competition matches" });
  }
});

export default router;
