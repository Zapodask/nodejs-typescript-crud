import app from './app'
import db from './models'

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3000, async () => {
        try {
            await db.sequelize.authenticate()
            console.log('DB connected')
        } catch (error) {
            console.error('Unable to connect to the database:', error)
        }
    })
})
