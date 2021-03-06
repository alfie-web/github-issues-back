import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import morganLogger from '../middlewares/morganLogger.js'
import errorsHandler from '../middlewares/errorsHandler.js'
import githubRoutes from './githubIssues.js'
import logsRoutes from './logs.js'

const corsOptions = {
   origin: [process.env.CLIENT_URL],
   credentials: true,
}

export default function createRoutes(app) {
   app.use(express.json())
   app.use(cors(corsOptions))
   app.use(helmet())
   app.use(morganLogger)

   app.use('/api/github', githubRoutes)
   app.use('/api', logsRoutes)

   app.use(errorsHandler)
}
