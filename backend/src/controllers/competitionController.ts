import type { Request, Response } from "express";
import { fetchCompetitions } from "../services/footballData";

export async function getCompetitions(_req: Request, res: Response) {
  try {
    const data = await fetchCompetitions();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(502).json({ error: "Unable to fetch competitions" });
  }
}
