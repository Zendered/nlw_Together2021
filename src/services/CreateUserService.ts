import prismaClient from "../prisma";
import { IUserRequest } from "../Interfaces/index";

export class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const userExists = await prismaClient.user.findFirst({ where: { email } });
    if (!email) {
      throw new Error("Email incorrect!");
    }
    if (!userExists) {
      const newUser = await prismaClient.user.create({
        data: { name, email, admin },
      });
      return newUser;
    } else {
      throw new Error("User alredy exists!");
    }
  }
}
