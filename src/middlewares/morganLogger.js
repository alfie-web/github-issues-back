import morgan from 'morgan'
import LogModel from '../models/Log.js'

const morganLogger = morgan(function (tokens, req, res) {
   const method = req.method
   const url = req.originalUrl
   const userIP = req.ip
   const status = tokens.status(req, res)
   const time = tokens['response-time'](req, res)

   const newLog = new LogModel({
      method,
      url,
      userIP,
      time,
      status,
   })
   newLog.save()

   return [
      method,
      url,
      status,
      tokens.res(req, res, 'content-length'), '-',
      time, 'ms',
   ].join(' ')
})

export default morganLogger
