import express from 'express'
import logsController from '../controllers/logs.js'

const routes = new express.Router()

routes.get('/logs', logsController.getAll)

export default routes
