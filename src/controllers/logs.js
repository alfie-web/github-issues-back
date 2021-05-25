import createError from 'http-errors'

import LogModel from '../models/Log.js'
import sendSuccessfulResult from '../helpers/sendSuccessfulResult.js'

const logsController = {
   async getAll(req, res, next) {
      const page = req.query.page || 1
      const limit = 30
      const offset = (+page - 1) * limit || 0

      res.actionType = 'get_logs'

      try {
         const logsCount = await LogModel.countDocuments()
         const logs = await LogModel.find().limit(limit).skip(offset)

         sendSuccessfulResult({
            res,
            message: 'success',
            data: {
               logs,
               totalLogsCount: logsCount,
            },
         })
         
      } catch (error) {
         next(createError(400, 'Самсинг вент ронг'))
      }
   },

   async create({ method, url, status, time, userIP, action }) {
      const newLog = new LogModel({
         userIP,
         method,
         url,
         status,
         time,
         action
      })
      await newLog.save()
   },
}

export default logsController
