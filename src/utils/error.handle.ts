import { Response } from "express";

const handleHttp = (res: Response, err: string, errorRaw?: any) => {
    const { message } = errorRaw
    res.status(500).json({
        results: [],
        message: err,
        error: message ?? 'Error Interno'
    })
}

const handleCustomResponse = (res: Response, status: number, message: string, results?: any) => {
    let count = undefined
    if (typeof (results) !== 'string' && results?.length) count = results?.length
    res.status(status).json({
        count,
        message: message,
        results: results || [],
    })
}

export { handleHttp, handleCustomResponse }