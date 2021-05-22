import express from 'express'
import connectToDB from './core/db.js'
import createRoutes from './routes/index.js'

const PORT = process.env.PORT || 8888
const app = express()

createRoutes(app)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

connectToDB()