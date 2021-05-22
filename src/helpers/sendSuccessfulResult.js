const sendSuccessfulResult = ({ res, status = 200, message, data }) => {
   res.status(status).json({
      message,
      data,
   })
}

export default sendSuccessfulResult
