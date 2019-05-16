import eventBus from '../../../util/EventBus'

const newsCallback = (response, event) => {
  let news = response
  eventBus.dispatchEvent(event, news)
}

const newsCallbackNew = (response, event) => {
  let news = response
  eventBus.dispatchEvent(event, news)
}

const errorCallback = (error, event) => {
  eventBus.dispatchEvent(event, error)
}

export {
  newsCallback,
  errorCallback,
  newsCallbackNew
}
