import axios from 'axios'

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  timeout: 20000,
})

export default apiClient
