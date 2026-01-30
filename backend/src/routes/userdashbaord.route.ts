import Router from "express";
import { authMiddleware } from "../middleware/authMiddleware";
const router = Router();
router.get("/", (req, res) => {
  res.send(
    "this is user dashboard that can only be accessed by logged in users",
  );
});
export default router;
