import { Router } from 'express' 
import { routerApiV1 } from './api_v1' 

const routes = Router() 

routes.use(routerApiV1)

export { routes } 