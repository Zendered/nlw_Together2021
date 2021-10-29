import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { ensureAdmin } from "../middleware/ensureAdmin";
import { CreateUserController } from "../controllers/CreateUserController";
import { CreateTagController } from "../controllers/CreateTagController";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateComplimentController } from "../controllers/CreateComplimentController";
const router = Router();

router.post("/users", new CreateUserController().handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  new CreateTagController().handle
);
router.post("/login", new AuthenticateUserController().handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  new CreateComplimentController().handle
);

export { router };
