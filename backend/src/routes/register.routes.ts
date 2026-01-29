import { Router } from "express";
import { registerPostController } from "../controller/register.controller";
const router=Router()
router.get("/",(req,res)=>{
    res.send("this is register page")
})
router.post("/",registerPostController)
export default router