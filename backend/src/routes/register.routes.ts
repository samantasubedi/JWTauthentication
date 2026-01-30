import { Router } from "express";
import {
  registerPostController,
  registerGetController,
} from "../controller/register.controller";
const router = Router();
router.get("/", registerGetController);
router.post("/", registerPostController);
export default router;
