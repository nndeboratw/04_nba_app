import request from '../../util/Request'

const getAllNewsPromise = () => {
  return request.get('/articles')
}

const getNewsByIntervalPromise = (interval) => {
  let endpoint = `/articles?_start=${interval.start}&_end=${interval.end}`
  return request.get(endpoint)
}


export {
  getAllNewsPromise,
  getNewsByIntervalPromise
}
