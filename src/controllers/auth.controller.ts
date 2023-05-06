import { Request, Response } from "express";
import { loginUser, registerNewUser, verifySessionService } from "../services/auth.service";
import { handleCustomResponse } from "../utils/error.handle";

const loginController = async ({ body }: Request, res: Response) => {
    const response = await loginUser(body)
    if (response === 'USER_NOT_FOUND' || response === 'INCORRECT_PASSWORD') {
        handleCustomResponse(res, 403, response)
    } else {
        handleCustomResponse(res, 200, 'Success', response)
    }
}

const registerController = async ({ body }: Request, res: Response) => {
    const responseUser = await registerNewUser(body)
    res.status(201).json({ responseUser })
}

const verifySessionController = async ({ body }: Request, res: Response) => {
    try {
        const response = await verifySessionService(body)
        handleCustomResponse(res, 200, 'Success!', response)
    } catch (err) {
        const { message } = err as any
        handleCustomResponse(res, 401, 'Unauthorized!', message )
    }
}

export { loginController, registerController, verifySessionController }