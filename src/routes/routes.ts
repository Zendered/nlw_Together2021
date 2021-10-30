import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { ensureAdmin } from "../middleware/ensureAdmin";
import { CreateUserController } from "../controllers/CreateUserController";
import { CreateTagController } from "../controllers/CreateTagController";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateComplimentController } from "../controllers/CreateComplimentController";
import { ListUserReceiveComplimetsController } from "../controllers/ListUserReceiveComplimetsController";
import { ListUserSendComplimetsController } from "../controllers/ListUserSendComplimetsController";
import { ListTagsController } from "../controllers/ListTagsController";
import { ListUsersController } from "../controllers/ListUsersController";
const router = Router();

router.post("/users", new CreateUserController().handle);

router.get("/tags", ensureAuthenticated, new ListTagsController().handle);

router.get(
  "/users",
  ensureAuthenticated,
  ensureAdmin,
  new ListUsersController().handle
);

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

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  new ListUserSendComplimetsController().handle
);

router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  new ListUserReceiveComplimetsController().handle
);

export { router };
