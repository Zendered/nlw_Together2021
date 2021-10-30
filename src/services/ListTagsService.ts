import prismaClient from "../prisma/index";

export class ListTagsService {
  async execute() {
    const tags = await prismaClient.tags.findMany();
    return tags;
  }
}
