// src/services/footballData.tsI a

const API_BASE = "https://api.football-data.org/v4";

export async function fetchCompetitions() {
  if (!process.env.FOOTBALL_DATA_API_KEY) {
    throw new Error("FOOTBALL_DATA_API_KEY missing");
  }

  const response = await fetch(`${API_BASE}/competitions`, {
    headers: {
      "X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Football Data API error ${response.status}: ${body}`);
  }

  return response.json(); // raw JSON returned
}
