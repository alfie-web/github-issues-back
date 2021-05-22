import morgan from 'morgan'
import logsController from '../controllers/logs.js'

const morganLogger = morgan(function (tokens, req, res) {
   const data = {
      userIP: req.ip,
      action: res.actionType,
      method: req.method,
      url: req.originalUrl,
      status: tokens.status(req, res),
      time: tokens['response-time'](req, res),
   }

   logsController.create(data)

   return [
      data.method,
      data.url,
      data.status,
      tokens.res(req, res, 'content-length'), '-',
      data.time, 'ms',
   ].join(' ')
})

export default morganLogger
