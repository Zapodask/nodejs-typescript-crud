import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import db from '../models'

class BookController {
    public async index (req: Request, res: Response): Promise<Response> {
        const books = await db.Books.findAll()

        return res.status(200).json(books)
    }

    public async store (req: Request, res: Response): Promise<Response> {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { title, description } = req.body

        const book = await db.Books.create({ title, description })

        return res.status(201).json(book)
    }

    public async get (req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        const book = await db.Books.findByPk(id)

        return res.status(200).json(book)
    }

    public async update (req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const { title, description } = req.body

        const book = await db.Books.update({ title, description }, { where: { id: id } })

        if (book.includes(1)) {
            return res.status(200).json({ message: 'Book updated' })
        } else {
            return res.status(400).json({ message: 'Error when updating' })
        }
    }

    public async delete (req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        const book = await db.Books.destroy({ where: { id: id } })

        if (book === 1) {
            return res.status(200).json({ message: 'Book deleted' })
        } else {
            return res.status(400).json({ message: 'Error when deleting' })
        }
    }
}

export default new BookController()
