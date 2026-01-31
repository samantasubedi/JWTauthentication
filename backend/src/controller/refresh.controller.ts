import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
const refreshSecret = process.env.REFRESH_SECRET!;
const accessSecret = process.env.ACCESS_SECRET!;
export const refreshPostController = (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;
  const username = jwt.verify(refreshToken, refreshSecret);
  if (!username) {
    res.status(401).send("invalid refresh token");
  } else if (username) {
    const newAccessToken = jwt.sign(username, accessSecret);
    res.json({ accessToken: newAccessToken });
  }
};
