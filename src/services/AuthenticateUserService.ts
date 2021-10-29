import { compare } from "bcrypt";
import { IUserLogin } from "../Interfaces/index";
import { sign } from "jsonwebtoken";
import prismaClient from "../prisma/index";

export class AuthenticateUserService {
  async execute({ email, password }: IUserLogin) {
    const userExists = await prismaClient.user.findFirst({ where: { email } });

    if (!userExists) {
      throw new Error("Email/Password Incorrect");
    }
    const userPassword = await compare(password, userExists.password);
    if (!userPassword) {
      throw new Error("Email/Password Incorrect!");
    }
    const token = sign(
      { email: userExists.email },
      `${process.env.JWT_SECRET}`,
      {
        subject: userExists.id,
        expiresIn: "1d",
      }
    );

    return { token, ...userExists };
  }
}
