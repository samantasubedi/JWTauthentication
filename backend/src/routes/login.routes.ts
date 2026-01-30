import { Router } from "express";
import { loginPostController } from "../controller/login.controller";
const router = Router();
router.get("/", (req, res) => {
  res.send("this is login page");
});
router.post("/", loginPostController);
export default router;
