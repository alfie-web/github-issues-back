import mongoose from 'mongoose'

const schema = new mongoose.Schema({
   userIP: {
      type: String,
      default: null,
   },
   method: {
      type: String,
      required: true,
   },
   url: {
      type: String,
      required: true,
   },
   status: {
      type: Number,
      required: true,
   },
   time: {
      type: String,
      required: true,
   },
})

export default mongoose.models.Log || mongoose.model('Log', schema)
