import { Response, Request, NextFunction } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthenticateUserController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const service = new AuthenticateUserService();
    const token = await service.execute({ email, password });
    res.json(token);
  }
}
