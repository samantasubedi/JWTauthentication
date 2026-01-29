import { Request,Response } from "express"
import {prisma} from "../app"
import bcrypt from "bcrypt-ts"
export const loginController= async(req:Request,res:Response)=>{
const name = req.body.name;
  const email = req.body.email;
  const generatedUser = await prisma.userinfo.create({
    data: {
      email,
      name,
    },
  });
  res.status(201).send(generatedUser);
}
