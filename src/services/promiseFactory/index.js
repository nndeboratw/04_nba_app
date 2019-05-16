import request from '../../util/Request'

const getAllNewsPromise = () => {
  return request.get('/news')
}

const getNewsByIntervalPromise = (interval) => {
  let endpoint = `/news?_start=${interval.start}&_end=${interval.end}`
  return request.get(endpoint)
}


export {
  getAllNewsPromise,
  getNewsByIntervalPromise
}
