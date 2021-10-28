import prismaClient from "../prisma/index";

export class CreateTagService {
  async execute(name: string) {
    const tagExists = await prismaClient.tags.findFirst({ where: { name } });
    // const isAdmin = "asdasd";
    if (!name) {
      throw new Error("Tag must not be empty");
    }
    if (!tagExists) {
      const newTag = await prismaClient.tags.create({ data: { name } });
      return newTag;
    } else {
      throw new Error("This tag already exists");
    }
  }
}
