import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import errorsHandler from '../middlewares/errorsHandler.js'

const corsOptions = {
   origin: [process.env.CLIENT_URL],
   credentials: true,
}

export default function createRoutes(app) {
   app.use(express.json())
   app.use(cors(corsOptions))

   app.use(
      helmet({
         contentSecurityPolicy: false,
      })
   )

   app.use(morgan('dev'))

   // app.use('/api/users', userRoutes)
   // app.use('/api/canvas', canvasRoutes)
   app.get('/', (req, res) => res.send('Fired!'))

   app.use(errorsHandler)
}
