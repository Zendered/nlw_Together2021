import prismaClient from "../prisma/index";
import { IComplimentRequest } from "../Interfaces/index";

export class CreateComplimentService {
  async execute({
    tag_id,
    message,
    user_senderID,
    user_receiveID,
  }: IComplimentRequest) {
    const user = await prismaClient.user.findFirst({
      where: { id: user_receiveID },
    });

    if (user_senderID === user_receiveID) {
      throw new Error("Cannot do that");
    }

    if (!user) {
      throw new Error("This user does not exists!");
    }

    const compliment = await prismaClient.compliments.create({
      data: {
        message,
        user_receiveID,
        user_senderID,
        tag_id,
      },
    });

    return compliment;
  }
}
