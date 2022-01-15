import { Sequelize } from 'sequelize'

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const db = process.env.DB_NAME

export default new Sequelize(`postgres://${username}:${password}@postgres:5432/${db}`)
