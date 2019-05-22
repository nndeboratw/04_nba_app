import request from '../../../util/Request'

const getAllNewsPromise = () => {
  return request.get('/news')
}

const getNewsByIntervalPromise = (interval) => {
  let endpoint = `/news?_start=${interval.start}&_end=${interval.end}`
  return request.get(endpoint)
}

const getTeamsPromise = () => {
  return request.get('/teams')
}


const getVideosByIntervalPromise = (interval) => {
  let endpoint = `/videos?_start=${interval.start}&_end=${interval.end}`
  return request.get(endpoint)
}


export {
  getAllNewsPromise,
  getNewsByIntervalPromise,
  getTeamsPromise,
  getVideosByIntervalPromise
}
