import app from './app'
import db from './database/db'

app.listen(process.env.PORT || 3000, async () => {
    await db.sync()
    try {
        await db.authenticate()
        console.log('DB connected')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
})
