import { Response, Request } from "express";
import { CreateTagService } from "../services/CreateTagService";

export class CreateTagController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const service = new CreateTagService();
    const result = await service.execute(name);
    return res.json(result);
  }
}
