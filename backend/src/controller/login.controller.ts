import { Request, Response } from "express";
import { prisma } from "../app";
import bcrypt from "bcrypt-ts";
import jwt from "jsonwebtoken";
import "dotenv/config"
export const loginPostController = async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  const secretKey = process.env.SECRET_KEY!
  console.log(secretKey)

  const user = await prisma.userlogininfo.findFirst({
    where: { username: username },
  });
  if (!user) {
    res.send("user dont exist");
  } else {
    const ispasswordvalid = await bcrypt.compare(password, user.password);
    if (ispasswordvalid) {
      const token = jwt.sign(username, secretKey);
      res.json({ message: "login sucessfull", token: token });
    } else if (!ispasswordvalid) {
      res.send("Incorrect password");
    }
  }
};
