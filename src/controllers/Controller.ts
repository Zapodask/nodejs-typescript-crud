import { Request, Response } from 'express'

class Controller {
    public async index (req: Request, res: Response): Promise<Response> {
        return res.json({ Hello: 'world!' })
    }
}

export default new Controller()
