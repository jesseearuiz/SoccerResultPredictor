import type { Request, Response } from "express";
import { fetchCompetitionMatchesRaw } from "../services/footballData";

export async function getCompetitionMatches(req: Request, res: Response) {
  try {
    const raw = await fetchCompetitionMatchesRaw(req.params.code);

    const matches = (raw.matches ?? []).map((match: any) => ({
      matchId: match.id,
      kickoff: match.utcDate,
      status: match.status,
      stage: match.stage,
      home: {
        id: match.homeTeam?.id,
        name: match.homeTeam?.name,
        crest: match.homeTeam?.crest,
        score: match.score?.fullTime?.home,
      },
      away: {
        id: match.awayTeam?.id,
        name: match.awayTeam?.name,
        crest: match.awayTeam?.crest,
        score: match.score?.fullTime?.away,
      },
    }));

    res.json({
      competition: raw.competition?.name,
      season: raw.filters?.season,
      total: matches.length,
      matches,
    });
  } catch (error) {
    console.error(error);
    res.status(502).json({ error: "Unable to fetch competition matches" });
  }
}
