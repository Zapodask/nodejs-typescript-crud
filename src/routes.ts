import { Router } from 'express'

import Controller from './controllers/BookController'

const routes = Router()

// Book routes
routes.get('/books', Controller.index)
routes.post('/books', Controller.store)
routes.get('/books/:id', Controller.get)
routes.put('/books/:id', Controller.update)
routes.delete('/books/:id', Controller.delete)

export default routes
