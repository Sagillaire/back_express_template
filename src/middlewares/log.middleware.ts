import { NextFunction, Request, Response } from "express";

const logMiddleware = ({ headers }: Request, res: Response, next: NextFunction) => {
    const userAgent = headers['user-agent']
    console.log(`User agent: ${userAgent}`)
    next()
}

export { logMiddleware }