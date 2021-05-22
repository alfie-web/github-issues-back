import createError from 'http-errors'

import githubService from '../services/github.js'
import sendSuccessfulResult from '../helpers/sendSuccessfulResult.js'

const githubController = {
   async getAll(req, res, next) {
      res.actionType = 'get_issues'

      try {
         const { data } = await githubService.getAllIssues(req.query)
         const repo = await githubService.getRepositoryByName(req.query)

         sendSuccessfulResult({ res, message: 'success', data: {
            issues: data,
            total_issues_count: repo.data.open_issues_count
         }})

      } catch (error) {
         next(createError(400, 'Самсинг вент ронг'))
      }
   },

   async getByNumber(req, res, next) {
      const number = req.params.number
      
      res.actionType = 'get_issue'

      try {
         const { data } = await githubService.getIssueByNumber({ ...req.query, number })

         sendSuccessfulResult({ res, message: 'success', data })

      } catch (error) {
         next(createError(400, 'Самсинг вент ронг'))
      }
   },
}

export default githubController
