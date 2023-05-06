import { NextFunction, Request, Response } from "express";
import { handleCustomResponse } from "../utils/error.handle";

export const validatorJoi = (schema: any) => {
    return async ({ body }: Request, res: Response, next: NextFunction) => {
        try {
            const { error } = await schema.validate(body)
            if (error) {
                handleCustomResponse(res, 400, error.details[0].message)
            } else {
                next()
            }
        } catch (err) {
            handleCustomResponse(res, 500, 'InternalError')
        }
    }
}