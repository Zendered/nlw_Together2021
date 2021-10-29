import { Request, Response, NextFunction } from "express";
import prismaClient from "../prisma/index";

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { user_id } = req;
  const user = await prismaClient.user.findFirst({
    where: {
      id: user_id,
      admin: true,
    },
  });

  if (!user) return res.status(401).json({ error: "Unauthorized" });
  return next();
}
