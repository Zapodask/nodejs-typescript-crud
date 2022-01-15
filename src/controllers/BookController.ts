import { Request, Response } from 'express'

import { BookModel } from '../database/models/BookModel'

class BookController {
    public async index (req: Request, res: Response): Promise<Response> {
        const books = await BookModel.findAll()

        return res.status(200).json(books)
    }

    public async store (req: Request, res: Response): Promise<Response> {
        const { title, description } = req.body

        const book = await BookModel.create({ title, description })

        return res.status(201).json(book)
    }

    public async get (req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        const book = await BookModel.findByPk(id)

        return res.status(200).json(book)
    }

    public async update (req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const { title, description } = req.body

        BookModel.update({ title, description }, { where: { id: id } })

        return res.status(200).json({ message: 'Book updated' })
    }

    public async delete (req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        BookModel.destroy({ where: { id: id } })

        return res.status(200).json({ message: 'Book deleted' })
    }
}

export default new BookController()
