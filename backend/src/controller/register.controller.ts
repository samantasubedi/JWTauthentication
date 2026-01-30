import { Request, Response } from "express";
import { prisma } from "../app";
import bcrypt from "bcrypt-ts";
export const registerPostController = async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  const hashedpassword:string = await bcrypt.hash(password, 10);
  await prisma.userlogininfo.create({
    data: { username,
        password:hashedpassword },
  });
  res.send(`registered as ${username}`);
};
export const registerGetController =async(req:Request,res:Response)=>{
    const users=await prisma.userlogininfo.findMany()
    res.json({message:"this is regestration page",registered_users :users})
}