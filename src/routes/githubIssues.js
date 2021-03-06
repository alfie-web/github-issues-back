import express from 'express'
import githubController from '../controllers/githubIssues.js'

const routes = new express.Router()

routes.get('/issues', githubController.getAll)
routes.get('/issue/:number', githubController.getByNumber)

export default routes
