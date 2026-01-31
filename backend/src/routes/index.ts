import { authMiddleware } from "../middleware/authMiddleware"
import loginRoutes from "./login.routes"
import registerRoutes from "./register.routes"
import dashboardRoutes from "./userdashbaord.route"
import refreshRoutes from "./refresh.route"
import { Router } from "express"
const router=Router()
router.use("/login",loginRoutes)
router.use("/register",registerRoutes)
router.use("/dashboard",authMiddleware,dashboardRoutes)
router.use("/refresh",refreshRoutes)


export default router