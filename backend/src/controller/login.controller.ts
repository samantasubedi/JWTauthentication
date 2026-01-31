import { Request, Response } from "express";
import { prisma } from "../app";
import bcrypt from "bcrypt-ts";
import jwt from "jsonwebtoken";
import "dotenv/config";
import strict from "node:assert/strict";
export const loginPostController = async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  const accessSecret = process.env.ACCESS_SECRET!;
  const refreshSecret = process.env.REFRESH_SECRET!;

  const user = await prisma.userlogininfo.findFirst({
    where: { username: username },
  });
  if (!user) {
    res.send("user dont exist");
  } else {
    const ispasswordvalid = await bcrypt.compare(password, user.password);
    if (ispasswordvalid) {
      const accessToken = jwt.sign(username, accessSecret);
      const refreshToken = jwt.sign(username, refreshSecret);
      res.cookie("refreshToken",refreshToken,{httpOnly:true,sameSite:"strict",secure:true})
      res.json({
        message: "login sucessfull",
        accessToken: accessToken,
       refreshToken:refreshToken
      });
    } else if (!ispasswordvalid) {
      res.send("Incorrect password");
    }
  }
};
