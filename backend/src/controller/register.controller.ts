import { Request,Response } from "express"
export const registerPostController = (req:Request,res:Response)=>{
    const username=req.body.username
    const password=req.body.password
    
res.send(`registered as ${username}`)
}