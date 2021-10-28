import { CreateUserController } from "../controllers/CreateUserController";
import { CreateTagController } from "../controllers/CreateTagController";
import { isAdmin } from "../middleware/isAdmin";
import { Router } from "express";
const router = Router();

router.post("/users", new CreateUserController().handle);
router.post("/tags", isAdmin, new CreateTagController().handle);

export { router };
