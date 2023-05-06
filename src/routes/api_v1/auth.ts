import { Router } from "express";
import { validatorJoi } from "../../middlewares";
import { LoginSchema, RegisterSchema } from "../../validators/auth.validator";
import { loginController, registerController, verifySessionController } from "../../controllers/auth.controller";

const router = Router()

router.post('/login', validatorJoi(LoginSchema), loginController)
router.post('/register', validatorJoi(RegisterSchema), registerController)
router.post('/verifySession', verifySessionController)

export { router }