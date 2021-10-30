import prismaClient from "../prisma/index";

export class ListUserReceiveComplimetsService {
  async execute(user_id: string) {
    const compliment = prismaClient.compliments.findMany({
      where: { user_senderID: user_id },
      include: {
        tags_id: true,
        user_sender: true,
        user_receive: true,
      },
    });
    return compliment;
  }
}
