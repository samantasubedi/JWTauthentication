import { Request, Response } from "express";
import { prisma } from "../app";
import bcrypt from "bcrypt-ts";
import jwt from "jsonwebtoken";
export const loginController = async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  const secretKey = "asdfsdfsadfasdfasdfasdfsdfd";

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
