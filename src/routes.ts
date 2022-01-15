import { Router } from 'express'
import { body } from 'express-validator'

import Controller from './controllers/BookController'

const routes = Router()

// Book routes
routes.get('/books', Controller.index)
routes.post('/books',
    body('title')
        .not().isEmpty()
        .withMessage('Title is required'),
    body('description')
        .not().isEmpty()
        .withMessage('Description is required'),
    Controller.store)
routes.get('/books/:id', Controller.get)
routes.put('/books/:id', Controller.update)
routes.delete('/books/:id', Controller.delete)

export default routes
