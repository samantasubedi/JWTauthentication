import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { decode } from "node:punycode";
const secret = process.env.SECRET_KEY!;
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.header("Authorization")!;
  if (!token) {
    return res.send("access denied, token not found");
  }
  try {
    const decodedData = jwt.verify(token, secret); // it extracts the real readable data from the token that we encoded before during login
    res.locals.user = decodedData;
    next();
  } catch (err) {
    res.status(400).send("invalid token");
  }
};
