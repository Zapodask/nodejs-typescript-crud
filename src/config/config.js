require('dotenv').config()

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: 'postgres',
        dialect: 'postgres'
    },
    test: {
        username: '',
        password: '',
        database: '',
        host: '127.0.0.1',
        dialect: 'postgres'
    },
    production: {
        username: '',
        password: '',
        database: '',
        host: '127.0.0.1',
        dialect: 'postgres'
    }
}
