import request from '../../util/request'

const getAllNewsPromise = () => {
  return request.get('/articles')
}


export {
  getAllNewsPromise
}
