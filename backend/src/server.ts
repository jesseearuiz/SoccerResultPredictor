import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT = Number(process.env.PORT ?? 5000);

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Backend is running with Node + TypeScript!" });
});

app.get("/predictions/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({
    matchId: id,
    home_win: 0.5,
    draw: 0.3,
    away_win: 0.2,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
