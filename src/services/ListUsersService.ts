import prismaClient from "../prisma/index";

export class ListUsersService {
  async execute() {
    const user = await prismaClient.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  }
}
