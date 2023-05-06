import { NextFunction, Request, Response } from "express";
import { handleCustomResponse } from "../utils/error.handle";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = async ({ headers }: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = headers.authorization || ''
        const jwt = jwtByUser.split(' ').pop()

        const isOk = await verifyToken(`${jwt}`)

        if (!isOk) return handleCustomResponse(res, 401, 'INVALID_SESSION')

        next()

    } catch (err) {
        handleCustomResponse(res, 400, 'NOT_AUTHORIZED')
    }
}

export { checkJwt }