import { Request, Response } from "express";
import { ListUserReceiveComplimetsService } from "../services/ListUserReceiveComplimetsService";

export class ListUserReceiveComplimetsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const service = new ListUserReceiveComplimetsService();
    const compliments = await service.execute(user_id);
    return res.json(compliments);
  }
}
