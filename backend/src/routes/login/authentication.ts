import express from "express";
import { Router } from "express";
import { prisma } from "../../app";
// import { prisma } from "../../app";
const router = Router();
router.get("/", (req, res) => {
  res.send("this is login page");
});
router.post("/", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const generatedUser = await prisma.userinfo.create({
    data: {
      email,
      name,
    },
  });
  res.status(201).send(generatedUser);
});
export default router;
