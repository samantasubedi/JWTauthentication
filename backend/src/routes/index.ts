import loginRoutes from "./login.routes"
import registerRoutes from "./register.routes"
import { Router } from "express"
const router=Router()
router.use("/login",loginRoutes)
router.use("/register",registerRoutes)
export default router