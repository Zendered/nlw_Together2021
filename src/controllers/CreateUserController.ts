import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { IUserRequest } from "../Interfaces/index";

export class CreateUserController {
  async handle(req: Request<{}, {}, IUserRequest>, res: Response) {
    const { name, password, email, admin } = req.body;
    const service = new CreateUserService();
    const user = await service.execute({ name, password, email, admin });
    return res.json(user);
  }
}
