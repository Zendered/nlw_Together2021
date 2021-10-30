import { Request, Response } from "express";
import { ListUserSendComplimetsService } from "../services/ListUserSendComplimetsService";

export class ListUserSendComplimetsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const service = new ListUserSendComplimetsService();
    const compliments = await service.execute(user_id);
    return res.json(compliments);
  }
}
