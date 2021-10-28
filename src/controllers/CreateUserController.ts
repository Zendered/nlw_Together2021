import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { IUserRequest } from "../Interfaces/index";

export class CreateUserController {
  async handle(req: Request<{}, {}, IUserRequest>, res: Response) {
    const { name, email, admin } = req.body;
    const service = new CreateUserService();
    const result = await service.execute({ name, email, admin });
    return res.json(result);
  }
}
