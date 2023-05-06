import { Router } from "express";
import { readdirSync } from 'fs'

const routerApiV1 = Router()
const PATH_ROUTER = `${__dirname}`

const clearFileName = (fileName: string) => fileName.split('.').shift()

readdirSync(PATH_ROUTER).forEach((filename) => {
    const cleanName = clearFileName(filename)
    if (cleanName !== 'index') {
        import(`./${cleanName}`).then((moduleRouter) => {
            routerApiV1.use(`/v1/${cleanName}`, moduleRouter.router)
        })
    }
})

export { routerApiV1 } 