import { Router } from "express";
import { loginController } from "../controller/login.controller";
const router = Router();
router.get("/", (req, res) => {
  res.send("this is login page");
});
router.post("/", loginController);
export default router;
