import axios from 'axios'

const instance = axios.create({
   baseURL: process.env.GITHUB_URL,
})

export default instance
