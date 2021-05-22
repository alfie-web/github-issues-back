import express from 'express'
import githubController from '../controllers/githubIssues.js'

const routes = new express.Router()

routes.get('/issues', githubController.getAllIssues)
routes.get('/issues/:number', githubController.getIssueByNumber)

export default routes
