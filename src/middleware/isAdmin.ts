import { Request, Response, NextFunction } from "express";

export function isAdmin(req: Request, res: Response, next: NextFunction) {
  const admin = true;

  if (!admin) return res.status(401).json({ error: "Unauthorized" });
  return next();
}
