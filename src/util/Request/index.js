import axios from 'axios'



const request = axios.create({
  baseURL: 'http://localhost'

})

request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  const res = error.response
  if (res && res.status === 403) { window.location.replace(res.data.urlLogin) }
  return Promise.reject(error)
})

export default request
