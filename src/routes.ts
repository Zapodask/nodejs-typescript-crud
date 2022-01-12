import { Router } from 'express'

import Controller from './controllers/Controller'

const routes = Router()

routes.get('/', Controller.index)

export default routes
