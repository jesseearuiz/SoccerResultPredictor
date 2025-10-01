import express from "express";
import type { Request, Response } from "express";
import competitionsRouter from "./routes/competitions";
import dotenv from "dotenv";
import { MongoDBCollectionNamespace } from "mongodb";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT ?? 5000);

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Backend is running with Node + TypeScript!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

app.use("/competitions", competitionsRouter);
