import prismaClient from "../prisma";
import { hash } from "bcrypt";
import { IUserRequest } from "../Interfaces/index";

export class CreateUserService {
  async execute({ name, email, password, admin = false }: IUserRequest) {
    const passwordHash = await hash(password, 12);
    const userExists = await prismaClient.user.findFirst({ where: { email } });
    if (!email) {
      throw new Error("Email incorrect!");
    }
    if (!userExists) {
      const newUser = await prismaClient.user.create({
        data: { name, email, password: passwordHash, admin },
      });
      return newUser;
    } else {
      throw new Error("User alredy exists!");
    }
  }
}
