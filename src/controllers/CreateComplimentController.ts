import { CreateComplimentService } from "../services/CreateComplimentService";
import { Response, Request } from "express";
export class CreateComplimentController {
  async handle(req: Request, res: Response) {
    const { message, tag_id, user_receiveID } = req.body;
    const { user_id } = req;
    const service = new CreateComplimentService();
    const compliment = await service.execute({
      message,
      tag_id,
      user_receiveID,
      user_senderID: user_id,
    });
    res.json(compliment);
  }
}
