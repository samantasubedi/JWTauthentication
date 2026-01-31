import Router from "express"
import {refreshPostController} from "../controller/refresh.controller"
const router=Router()
router.post("/",refreshPostController)
export default router