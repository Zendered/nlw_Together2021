import prismaClient from "../prisma/index";

export class ListUserSendComplimetsService {
  async execute(user_id: string) {
    const compliment = prismaClient.compliments.findMany({
      where: { user_receiveID: user_id },
    });
    return compliment;
  }
}
