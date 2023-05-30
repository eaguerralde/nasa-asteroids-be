import { Request, Response, Router } from "express";
import { Favourite } from "./types";
import * as service from "./service";

export const router = Router();

router.post("/read", async (_: Request, res: Response) => {
  const favourites: Favourite[] = await service.read();
  res.status(200).send(favourites);
});

router.post("/create", async (req: Request, res: Response) => {
  const { neoId, userId } = req?.body || {};
  if (!neoId || !userId) {
    return res.status(400).send('{ neoId, userId } are required.');
  }
  const favourite: Favourite = await service.create(req.body as Favourite);
  return res.status(200).send(favourite);
});

router.post("/delete", async (req: Request, res: Response) => {
  const { neoId, userId } = req?.body || {};
  if (!neoId || !userId) {
    return res.status(400).send('{ neoId, userId } are required.');
  }
  const deleted = await service.remove(req.body as Favourite);
  return res.status(200).send({ deleted });
});